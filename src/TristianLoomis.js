import React, { useState, useEffect } from 'react';

function TristianLoomis(props) {
    const [exampleStuffs, setProjects] = useState([]);
    useEffect(() => {
      console.log('useEffect:', exampleStuffs);
    })
    
    useEffect(() => {
      // Fetch projects from an API
      setProjects(props.exampleStuffs);
      // axios.get('https://example.com/api/projects')
      //   .then((response) => setProjects(response.data))
      //   .catch((error) => console.error(error));
    }, []);
  
    return (
      <div>
        <h2>Example Project</h2>
        <ul>
          {exampleStuffs.map((project) => (
            <li key={project.id}>{project.projectType} + " " + {project.projectLength} + " " + {project.estCostLabor} + " " + {project.bidPrice} + " " + {project.accepted}</li>
          ))}
        </ul>
      </div>
    );
  }
export default TristianLoomis;