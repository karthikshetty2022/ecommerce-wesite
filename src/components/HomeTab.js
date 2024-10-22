import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import './HomeTab.css';
import illustrator from '../assets/data-analysis-case-study.png';
const {constants} = require('../constants/constant');

function HomeTab() {
    const [activeTab, setActiveTab] = useState(0);

    const handleChangeIndex = (index) => {
        setActiveTab(index);
    };

    return (
        <>
        <div className='slider'>
            <SwipeableViews index={activeTab} onChangeIndex={handleChangeIndex}>
                {
                    constants.tabs.map((tab) => (
                        <div>
                            <div key={tab.id} className={`slider-content${tab.id}`}>
                                <div className='slider1'>
                                    <p className='lining'>{tab.content}<br/><t/><span className="secendline">{tab.content1}</span></p>
                                    <p className='subline'>{tab.subline}</p>
                                    <button className={`registerButton${tab.id}`}>Register</button>
                                </div>
                                <div className='slider2'>
                                <img src={illustrator} alt="Illustration" className="illustration" />
                                </div>
                            </div>
                            <div className='dotContainerMain'>
                                {constants.tabs.map((tab, index) => (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`dot ${activeTab === index ? 'active' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                }
            </SwipeableViews>
        </div>
        <div className='slider-mob'>
            <SwipeableViews index={activeTab} onChangeIndex={handleChangeIndex}>
                {
                    constants.tabs.map((tab) => (
                        <div>
                            <div key={tab.id} className={`slider-content-mob${tab.id}`}>
                                <div className='slider1-mob'>
                                    <p className='lining-mob'>{tab.content}<br/><t/><span className="secendline-mob">{tab.content1}</span></p>
                                    <p className='subline-mob'>{tab.subline}</p>
                                    <button className={`registerButton-mob${tab.id}`}>Register</button>
                                </div>
                                <div className='slider2-mob'>
                                <img src={illustrator} alt="Illustration" className="illustration-mob" />
                                </div>
                            </div>
                            <div className='dotContainerMain-mob'>
                                {constants.tabs.map((tab, index) => (
                                    <div
                                        key={tab.id}
                                        onClick={() => setActiveTab(index)}
                                        className={`dot-mob ${activeTab === index ? 'active' : ''}`}
                                    />
                                ))}
                            </div>
                        </div>
                    ))
                }
            </SwipeableViews>
        </div>
        </>
    );
}

export default HomeTab;
