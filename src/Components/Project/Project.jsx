import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import ProjectImg from '../../assets/about.png';

const projects = [
  {
    title: 'Bright Town Study',
    description: 'React, Tailwindcss project about learning social media.',
    client: 'trapham',
    tags: ['TypeScript', 'React', 'Tailwindcss'],
    image: '/src/assets/about.png?t=1750490828186',
    forIcon: 'TraPham',
    link: '#'
  },
  {
    title: 'DrivingSkillCert',
    description: 'WPF C#/.net project about exam and manage driving skill certificate',
    client: 'trapham',
    tags: ['.NET', 'C#', 'WPF'],
    image: '/src/assets/about.png?t=1750490828186',
    forIcon: 'TraPham',
    link: '#'
  },
  {
    title: 'ProductsMaintainManagement',
    description: 'JSP/Servlet java web about manage warranty process.',
    client: 'trapham',
    tags: ['Java', 'JSP/Servlet','Bootstrap','Javascript'],
    image: '/src/assets/about.png?t=1750490828186',
    forIcon: 'TraPham',
    link: '#'
  },
  {
    title: 'BusSystem',
    description: 'JSP/Servlet java web about manage bus schedule.',
    client: 'trapham',
    tags: ['Java', 'JSP/Servlet'],
    image: '/src/assets/about.png?t=1750490828186',
    forIcon: 'TraPham',
    link: '#'
  }
];

const Project = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects</h2>
        <a href="#" className="view-more">View More</a>
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Project;
