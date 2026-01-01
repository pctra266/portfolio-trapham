import React from 'react';
// CSS đã được import ở file cha (Project.jsx) hoặc bạn có thể import trực tiếp tại đây

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} className="project-image" />
        <div className="card-overlay">
            <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="view-code-btn"
            >
                View Code <span>&lt;/&gt;</span>
            </a>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-top-info">
            <h3>{project.title}</h3>
            <span className="project-date">{project.date}</span>
        </div>

        <div className="tag-list">
          {project.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>

        <ul className="project-highlights">
            {project.highlights.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;