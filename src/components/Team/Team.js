// src/Team.js

import React from 'react';
import './Team.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Kaushik Deka',
    role: 'Frontend Developer',
    linkedin: 'https://www.linkedin.com/in/johndoe',
    github: 'https://github.com/johndoe',
    imgSrc: 'https://via.placeholder.com/150'
  },
  {
    name: 'Priyajit Paul',
    role: 'Backend Developer',
    linkedin: 'https://www.linkedin.com/in/janesmith',
    github: 'https://github.com/janesmith',
    imgSrc: 'https://via.placeholder.com/150'
  },
  {
    name: 'Darpan Deka',
    role: 'UI/UX Designer',
    linkedin: 'https://www.linkedin.com/in/bobjohnson',
    github: 'https://github.com/bobjohnson',
    imgSrc: 'https://via.placeholder.com/150'
  },
  {
    name: 'Chinmoy',
    role: 'Project Manager',
    linkedin: 'https://www.linkedin.com/in/alicebrown',
    github: 'https://github.com/alicebrown',
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
