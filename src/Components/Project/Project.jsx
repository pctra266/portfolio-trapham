import React from 'react';
import './Project.css';
import ProjectCard from './ProjectCard';
import funewsImg from '../../assets/funews.png';
import knowhubImg from "../../assets/knowhub.png";
import certCarImg from "../../assets/certCar.png";
import ebayImg from "../../assets/ebay.jpg";

const projects = [
  {
    title: 'E-commerce Admin Management System',
    date: 'Jan 2026 -- Mar 2026',
    link: 'https://github.com/pctra266/ebay_clone_adminRole',
    tags: ['ASP.NET Core', 'Docker', 'NginX', 'Redis', 'Kubernetes', 'CI/CD', 'SQL Server'],
    image: ebayImg,
    highlights: [
      'Led a team of 5 using Jira (Agile/Scrum) to develop a comprehensive admin dashboard managing users, products, global orders, and complex workflows like dispute resolution and refunds.',
      'Designed a highly scalable architecture utilizing Nginx for load balancing and deployed via Kubernetes (K8s) to ensure Zero Downtime updates.',
      'Implemented stringent security protocols including IP-restricted/2FA admin access, strict Role-Based Access Control (RBAC), API rate limiting, and encrypted logging for sensitive data.',
      'Established automated CI/CD pipelines (GitHub Actions) to streamline development and deployment processes.',
      'Ensured system reliability and security by conducting rigorous load testing with JMeter and security penetration testing.',
      'Built an intuitive React frontend equipped with real-time statistics (revenue, user growth), review monitoring, and system-wide email notification capabilities.'
    ]
  },
  {
    title: 'FU News Management System',
    date: 'Jan 2026 -- Feb 2026',
    link: 'https://github.com/pctra266/FUNewsManagementSystem',
    tags: ['ASP.NET Core', 'Retry Policies', 'Audit Logging', 'AI Integration', 'Offline Mode', 'SignalR'],
    image: funewsImg,
    highlights: [
      'Implemented a secure authentication layer with JWT and Refresh Token flows, alongside a comprehensive Audit Logging system to track data changes via Before/After JSON snapshots.',
      'Developed an AI-driven tag suggestion engine with a learning cache mechanism and a dedicated Analytics service for trending content and Excel report exports.',
      'Engineered a resilient Frontend architecture using HttpClientFactory, DelegatingHandler, and Polly retry policies to ensure robust API communication.',
      'Integrated SignalR for real-time system notifications and built a Background Worker (HostedService) to synchronize and refresh cached data every 6 hours.',
      'Designed a fail-safe "Offline Mode" allowing users to access cached news content via local storage/JSON when primary API services are unreachable.',
      'Created a dynamic administrative dashboard using Chart.js for data visualization and Bootstrap Modals for optimized CRUD workflows.'
    ]
  },
  {
    title: 'KnowHub - Online Learning Platform',
    date: 'Sep 2025 -- Nov 2025',
    link: 'https://github.com/hoangvanduc2k4/OnlineLearningPlatform',
    tags: ['ASP.NET Core', 'SignalR', 'EF Core', 'SQL'],
    image: knowhubImg,
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
    image: certCarImg,
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