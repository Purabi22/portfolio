import React from 'react';
import './Mobilenav.css';
import { Link as ScrollLink } from 'react-scroll';

const Mobilenav = ({ isOpen, toggleMenu }) => {
  const handleMenuClick = () => {
    // Close the mobile menu when a menu item is clicked
    toggleMenu();
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./images/logo2.jpg" alt=" " />
          <ul>
            <li>
              <ScrollLink
                to="photo-container"
                spy={true}
                smooth={true}
                duration={500}
                className="menu-item"
                onClick={handleMenuClick} // Close menu when item is clicked
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills-container"
                spy={true}
                smooth={true}
                duration={500}
                className="menu-item"
                onClick={handleMenuClick} // Close menu when item is clicked
              >
                Skills
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="project-container"
                spy={true}
                smooth={true}
                duration={500}
                className="menu-item"
                onClick={handleMenuClick} // Close menu when item is clicked
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact-container"
                spy={true}
                smooth={true}
                duration={500}
                className="menu-item"
                onClick={handleMenuClick} // Close menu when item is clicked
              >
                Contact Me
              </ScrollLink>
            </li>
          </ul>
          <button className="contact-btn" onClick={() => window.open('./images/resume.pdf')}>
            My Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default Mobilenav;
