// src/Team.js

import React from 'react';
import './Team.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Kaushik Deka',
    // role: 'Frontend Developer',
    linkedin: 'https://www.linkedin.com/in/kaushik-deka-710869224/',
    github: 'https://github.com/K2302',
    imgSrc: 'https://via.placeholder.com/150'
  },
  {
    name: 'Priyajit Paul',
    // role: 'Backend Developer',
    linkedin: 'https://www.linkedin.com/in/priyajit-paul-4b4840213/',
    github: 'https://github.com/priyajit27',
    imgSrc: 'https://res.cloudinary.com/priyojit/image/upload/v1722155255/WhatsApp_Image_2024-07-28_at_1.57.07_PM_anoctm.jpg'
  },
  {
    name: 'Darpan Deka',
    // role: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/darpan-deka-63a291231/',
    github: 'https://github.com/Darpan-2002',
    imgSrc: 'https://via.placeholder.com/150'
  },
  {
    name: 'Chinmoy Dutta',
    // role: 'Project Manager',
    linkedin: 'https://www.linkedin.com/in/duttachinmoy17/',
    github: 'https://github.com/csechinmoy1234',
    imgSrc: 'https://via.placeholder.com/150'
  }
];

const Team = () => {
  return (
    <div className="team-container">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <img src={member.imgSrc} alt={member.name} className="team-member-img" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <div className="team-member-links">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
