import React from 'react'
import { experiences } from '../constants';
import { useState, useEffect } from 'react';

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleButtonClick = (button) => {
    setSelectedExperience(button);
  };

  if(selectedExperience) {
    // Display the content associated with the selected button
    return (
      <div className="flex flex-col">
        <div className='w-full flex flex-row pb-5'>
          <button className="text-black" onClick={() => setSelectedExperience(null)}>
          <img className="" src="/src/assets/back-button.png"alt="Folder"/>
          </button>
          <text className='text-black pl-1 self-center'>Back</text>
          <div className="w-full flex flex-row justify-center align-middle self-center">
            <text className='text-black self-center pr-1'>{experiences[selectedExperience].title}: {experiences[selectedExperience].company_name} </text>
            <img className="h-8 w-8 rounded drop-shadow-2xl"src={experiences[selectedExperience].icon}alt="Folder"/>
          </div>   
        </div>
        <div className='text-black p-3 bg-white drop-shadow-2xl border border-gray-400 flex flex-col'>
        <text className='pb-1 text-2xl font-bold'>Description: </text>
          <text>{experiences[selectedExperience].description}</text>
          <text className='pb-1 text-2xl font-bold'>Experience: </text>
          <div className='pl-4'>
            {experiences[selectedExperience].points.map((experience) =>(
                <li>{experience}</li>
              ))}
          </div>
        </div>
      </div>
    );
  } else {
    // Display the list of buttons
    return (
      <div className="p-1 bg-white drop-shadow-2xl border border-gray-400 flex flex-wrap flex-row">
        {experiences.map((experience) =>(
          <button  onClick={() => handleButtonClick(experience.id)} className="text-black scale-50 self-center flex flex-col">
            <img className="rounded-2xl drop-shadow-2xl w-32 self-center" src={experience.icon}alt="Folder"/>
            <label className="text-3xl self-center">{experience.company_name}</label>
          </button>
        ))}
      </div>
    );
  }
}

export default Experience