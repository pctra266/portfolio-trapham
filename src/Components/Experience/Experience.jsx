import React, { useState } from 'react';
import './Experience.css';

const workExperience = [
  {
    date: 'May 2025 - Present',
    company: 'FPT Software',
    role: 'Intern Frontend Web Developer',
    description: 'Web Design; Web Development; React + TypeScript',
    logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png'
  }
];

const studiesExperience = [
  {
    date: 'Oct 2022 - Nov 2026',
    school: 'FPT University',
    degree: 'Software Engineer',
    logo: 'https://cdn-icons-png.flaticon.com/512/281/281786.png'
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <div className="experience-container">
      <h2>Experience</h2>
      <div className="tab-buttons">
        <button
          className={activeTab === 'work' ? 'active' : ''}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
        <button
          className={activeTab === 'studies' ? 'active' : ''}
          onClick={() => setActiveTab('studies')}
        >
          Studies
        </button>
      </div>

      <div className="timeline">
        {(activeTab === 'work' ? workExperience : studiesExperience).map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              <img src={item.logo} alt="logo" />
            </div>
            <div className="timeline-content">
              <span className="date">{item.date}</span>
              <h3>{activeTab === 'work' ? item.company : item.school}</h3>
              <p className="role">
                {activeTab === 'work' ? item.role : item.degree}
              </p>
              {item.description && <p className="description">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
