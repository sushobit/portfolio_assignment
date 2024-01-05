
import React, { useState } from 'react';
import Project from './Project';
import './ProjectsView.css'; 

const ProjectsView = () => {
  const [projects, setProjects] = useState([
    {
      name: 'GreenLightRedlight Game',
      link: 'https://greenlight-redlight-game.vercel.app/',
      description: 'A small responsive design web game that recreates the iconic green light/red light game from Squid Games. The goal of the game is to get to n clicks on the green box within y seconds.',
    },
    {
      name: 'Gadwatch Ecommerce Website',
      link: 'https://eteva-ecommerce-assignment.vercel.app/',
      description: 'Discover a world of endless possibilities with Gadwatch Ecommerce Website, your go-to destination for a seamless online shopping experience. Our state-of-the-art eCommerce website, ',
    },
  ]);

  const [newProjectName, setNewProjectName] = useState('');
  const [newProjectLink, setNewProjectLink] = useState('');
  const [newProjectDescription, setNewProjectDescription] = useState('');

  const addProject = () => {
    if (newProjectName && newProjectLink && newProjectDescription) {
      const newProject = {
        name: newProjectName,
        link: newProjectLink,
        description: newProjectDescription,
      };
      setProjects([...projects, newProject]);
      setNewProjectName('');
      setNewProjectLink('');
      setNewProjectDescription('');
    }
  };

  return (
    <div className="projects-container">
      <header>
        <h2>Project Section</h2>
      </header>
      <div className="form-container">
        <input
          type="text"
          placeholder="Enter project name"
          value={newProjectName}
          onChange={(e) => setNewProjectName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter project link"
          value={newProjectLink}
          onChange={(e) => setNewProjectLink(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter project description"
          value={newProjectDescription}
          onChange={(e) => setNewProjectDescription(e.target.value)}
        />
        <button className='addproject' onClick={addProject}>Add Project</button>
      </div>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <Project name={project.name} link={project.link} description={project.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsView;
