import React from 'react'
import {projects} from '../constants';
import { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleButtonClick = (button) => {
    console.log(button)
    setSelectedProject(button);
  };

  if(selectedProject) {
    // Display the content associated with the selected button
    return (
      <div>
        <button onClick={() => setSelectedProject(null)}>Go Back</button>
        <div className='text-black'>{projects[selectedProject].description}</div>
      </div>
    );
  } else {
    // Display the list of buttons
    return (
      <div className="p-3 bg-white drop-shadow-2xl border border-gray-400">
        {projects.map((project) =>(
          <button  onClick={() => handleButtonClick(project.id)} className="text-black">{project.name}</button>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="p-3 bg-white drop-shadow-2xl border border-gray-400">
        {projects.map((project) =>(
          <div className="text-black">{project.name}</div>
        ))}
      </div>
    </div>
    
  )
}

export default Projects