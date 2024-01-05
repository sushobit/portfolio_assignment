
import React from 'react';

const Project = ({ name, description, link }) => {
  return (
    <li className="project-card">
      <div className="project-info">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
          View Project
        </a>
      )}
    </li>
  );
};

export default Project;
