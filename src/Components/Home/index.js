

import React from 'react';
import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="info-container">
        <h1>Hello, my name <br/>is SUSHOBHIT DHARA</h1>
        <p>I have recently completed my  Full Stack Developer Course  from NxtWave CCBP 4.0 Certification Program. Throughout my
          studies, I have gained a solid foundation in HTML, CSS, Javascript, ReactJs, NodeJs, MYSQL, Python. and I am confident in 
          my ability to apply these skills effectively in a professional setting.</p>
          <a href="/project" className="project-button">View Projects</a>
        <a href="https://www.linkedin.com/in/sushobhit-dhara-55043a11b/" className="linkedin-button" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
      <div className="photo-container">
        <img src="/image.jpg" alt="Your Name" />
      </div>
    </div>
  );
};

export default Home;
