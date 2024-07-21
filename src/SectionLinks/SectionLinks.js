import React from 'react';
import './SectionLinks.css';

const SectionLinks = () => {
  return (
    <div className="section-container">
      <div className="section-box">
        <a href="/medical">Medical</a>
      </div>
      <div className="section-box">
        <a href="/disaster">Disaster</a>
      </div>
      <div className="section-box">
        <a href="/services">Services</a>
      </div>
      <div className="section-box">
        <a href="/personal">Personal</a>
      </div>
    </div>
  );
};

export default SectionLinks;
