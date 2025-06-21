import React from 'react';
// import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} className="project-image" />
      <div className="project-content">
        <h3>{project.title}</h3>
        <a href={project.link} className="discover-button">
          Discover <span>→</span>
        </a>
        <p>{project.description}</p>
        <div className="project-for">
          <span className="for-icon">{project.forIcon}</span>
          <span>{project.client}</span>
        </div>
        <div className="tag-list">
          {project.tags.map((tag, i) => (
            <span className="tag" key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
