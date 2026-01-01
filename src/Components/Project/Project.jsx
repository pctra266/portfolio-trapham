import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import ProjectImg from '../../assets/about.png'; // Đảm bảo đường dẫn ảnh đúng

const projects = [
  {
    title: 'KnowHub - Online Learning Platform',
    date: 'Sep 2025 -- Nov 2025',
    link: 'https://github.com/hoangvanduc2k4/OnlineLearningPlatform',
    tags: ['ASP.NET Core', 'SignalR', 'EF Core', 'SQL'],
    image: ProjectImg, 
    highlights: [
      'Built a comprehensive E-learning platform connecting Mentors and Mentees (Team of 5).',
      'Led the Database Design (ERD) for 20+ entities including Courses, Quizzes, and Transactions.',
      'Implemented Real-time Communication features using SignalR for instant low-latency messaging.',
      'Developed the Assessment Module with complex business logic and role-based authorization.'
    ]
  },
  {
    title: 'Driving Skill Certification System',
    date: 'Jan 2025 -- Mar 2025',
    link: 'https://github.com/pctra266/DrivingSkillCert',
    tags: ['C#', 'WPF', '.NET', 'SQL Server'],
    image: ProjectImg,
    highlights: [
      'Developing a desktop application for managing driving course registrations (Team of 3).',
      'Implemented Layered Architecture ensuring clean code separation.',
      'Utilized Entity Framework & LINQ for efficient database operations.',
      'Designed MSSQL database schema and built User Management system with role-based authentication.',
      'Collaborated via GitHub for version control and Agile/Scrum workflows.'
    ]
  }
];

const Project = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h2>Projects</h2>
        {/* <a href="https://github.com/pctra266" target="_blank" rel="noreferrer" className="view-more">View GitHub</a> */}
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