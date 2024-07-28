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
        <a href="/services">Education</a>
      </div>
      <div className="section-box">
        <a href="/personal">Infrastructure</a>
      </div>
    </div>
  );
};

export default SectionLinks;
