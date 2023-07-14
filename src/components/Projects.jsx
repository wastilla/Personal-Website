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
      <div className="flex flex-col">
        <div className='w-full flex flex-row pb-5'>
          <button className="text-black" onClick={() => setSelectedProject(null)}>
          <img className=""src="/src/assets/back-button.png "alt="Folder"/>
          </button>
          <text className='text-black pl-1 self-center'>Back</text>
          <div className="w-full flex flex-row justify-center align-middle self-center">
            <text className='text-black self-center pr-1'>{projects[selectedProject].name}</text>
            <img className="h-7 w-8"src="/src/assets/folder-icon.png "alt="Folder"/>
          </div>
          
        </div>
        <div className='text-black p-3 bg-white drop-shadow-2xl border border-gray-400 flex flex-col'>
          <text className='pb-2 text-xl'>Description: </text>
          <text>{projects[selectedProject].description}</text>
          <text className='pb-2 text-xl'>Team: </text>
          <text>{projects[selectedProject].team}</text>
        </div>
      </div>
    );
  } else {
    // Display the list of buttons
    return (
      <div className="p-3 bg-white drop-shadow-2xl border border-gray-400 flex flex-wrap flex-row">
        {projects.map((project) =>(
          <button  onClick={() => handleButtonClick(project.id)} className="text-black p-2 scale-50">
            <img src="/src/assets/folder-icon.png "alt="Folder"/>
            <label className="text-3xl">{project.name}</label>
          </button>
        ))}
      </div>
    );
  }
}

export default Projects