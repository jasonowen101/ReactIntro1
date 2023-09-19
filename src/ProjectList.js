// ProjectList.js
import React, { useState, useEffect } from 'react';
import MyButton from './MyButton.js';

function ProjectList(props) {
  const [projects, setProjects] = useState([]);
  
  useEffect(() => {
    setProjects(props.projects);
  }, [props]);

  return (
    <div>
      <h2>Current Projects</h2>
      <MyButton />
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.projectType}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;
