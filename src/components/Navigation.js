import React, { useState } from 'react';
import './Navigation.css';
import btnLogo from '../assets/arrowright.png';

function Navigation() {
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);


  const handleButtonClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const toggleMenu =() =>{
    setToggle(true)
  }

  const toggleMenuClose = () =>{
    setToggle(false)
  }

  return (
    <>
      <nav className='navbar'>
        <div className="logo">

          <img src='https://cdn.prod.website-files.com/657884226f6bf0f39862c9c2/6578857288113ef49f4fb09a_Logo.png' alt='' className="nexcent" ></img>
        </div>
        <ul className='menuList'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <button className="register-button" onClick={handleButtonClick} disabled={loading}>
            Register Now<img src={btnLogo} alt='' className="arrow-icon" />
          </button>
        </ul>
      </nav>
      <nav className='navbar-mob'>
        <div className="logo-mob">
          <img src='https://cdn.prod.website-files.com/657884226f6bf0f39862c9c2/6578857288113ef49f4fb09a_Logo.png' alt='' className="nexcent-mob" ></img>
        </div>
        <div>
          <div className={`fas-button${toggle ? '' : '-open'}`} onClick={toggleMenu}><i class="fas fa-bars"></i></div>
          <div className={`fas-buttons${toggle ? '' : '-close'}`} onClick={toggleMenuClose}><i class="fas fa-times"></i></div>
        </div>
      </nav>
      <div className={`menu-mob${toggle ? '-open' : ""}`} >
        <ul className='list-mob'>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navigation;
