

import React, { useState } from 'react';
import './index.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="left-section">
        <a href="/" className="left-section">SUSHOBHIT DHARA</a>
      </div>
      <div className={`right-section ${isMenuOpen ? 'open' : ''}`}>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <nav>
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/project">Project</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
