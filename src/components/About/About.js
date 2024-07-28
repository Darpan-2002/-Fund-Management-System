// src/About.js

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <img
        src="https://res.cloudinary.com/priyojit/image/upload/v1722105037/WhatsApp_Image_2024-07-27_at_11.55.08_PM_kfcvcp.jpg"
        alt="About Us"
        className="about-photo"
      />
      <div className="about-text">
        <h2>About Us</h2>
        <p>
          Welcome to our company! We are dedicated to providing the best services
          to our clients. Our team is composed of highly skilled professionals
          who are passionate about their work. We believe in continuous
          improvement and strive to exceed expectations in every project we
          undertake. Thank you for visiting our website, and we look forward to
          working with you.
        </p>
      </div>
    </div>
  );
};

export default About;
