import React from 'react';
import './SectionLinks.css';

const SectionLinks = () => {
  return (
    <div className="section-container">
      <div className="section-box">
        <a href="https://healthcare-pi-one.vercel.app/">Medical</a>
      </div>
      <div className="section-box">
        <a href="https://disaster-lake.vercel.app/">Disaster</a>
      </div>
      <div className="section-box">
        <a href="https://education-theta-one.vercel.app/">Education</a>
      </div>
      <div className="section-box">
        <a href="https://insfrastructure.vercel.app/">Road and infrastructure</a>
      </div>
    </div>
  );
};

export default SectionLinks;
