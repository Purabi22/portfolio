import React, { useState } from 'react';
import './Navbar.css';
import Mobilenav from './Mobilenav';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className='logo' src='./images/logo2.jpg' alt='' />
          <ul>
            <li>
              <ScrollLink to="photo-container" spy={true} smooth={true} duration={500} className="menu-item">Home</ScrollLink>
            </li>
            <li>
              <ScrollLink to="skills-container" spy={true} smooth={true} duration={500} className="menu-item">Skills</ScrollLink>
            </li>
            <li>
              <ScrollLink to="project-container" spy={true} smooth={true} duration={500} className="menu-item">Projects</ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact-container" spy={true} smooth={true} duration={500} className="menu-item">Contact Me</ScrollLink>
            </li>
          </ul>
          {window.innerWidth > 768 && ( // Hide the button on screens smaller than 768px
          <button className="contact-btn" onClick={() => window.open('./images/resume.pdf')}>
          My Resume
          </button>)}  

          <button className='menu-btn' onClick={toggleMenu}>
            {openMenu ? (
              <>
                &#10006;
                <span style={{ fontSize: '2rem', marginLeft: '0.5rem' }}></span>
              </>
            ) : (
              <>
                &#9776;
                <span style={{ fontSize: '2rem', marginLeft: '0.5rem' }}></span>
              </>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
