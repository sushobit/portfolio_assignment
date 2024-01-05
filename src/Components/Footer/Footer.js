
import React from 'react';
import SocialIcons from './SocialIcons'; 
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 SUSHOBHIT DHARA. All rights reserved.</p>
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
