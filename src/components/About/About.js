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
          Welcome to the  Fund Management website! Public fund management in sectors like health, education, natural disaster relief, and road construction is 
plagued by inefficiencies, lack of transparency, and vulnerability to fraud. Traditional systems fail to ensure 
secure, accountable, and traceable transactions, leading to the misallocation of resources and erosion of public 
trust. This project aims to develop a Blockchain-Based Fund Management System to enhance transparency, 
security, and accountability, reducing the risk of illegal money fraud and ensuring ethical fund allocation.
        </p>
      </div>
    </div>
  );
};

export default About;
