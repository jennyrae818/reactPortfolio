import React from 'react';
import '../styles/style.css';


function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => handlePageChange('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#about" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a href="#blog" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} >
          Contact
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
