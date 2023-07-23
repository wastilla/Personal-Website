import React from 'react'
import { websiteLogo } from '../assets'
import { useState } from 'react';


const About = (props) => {

  const [selectedPage, setSelectedPage] = useState("General");

  const handleButtonClick = (button) => {
    setSelectedPage(button);
  };

  return (
    <div>
      <div className="flex flex-row px-1">
          <button className = "shadow-inner bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2 border-r-0 border-b-0" onClick={() => handleButtonClick("General")}>General</button>
          <button className = "bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2 border-b-0 " onClick={() => handleButtonClick("Interests")}>Interests</button>
      </div>
      <div className="p-3 bg-white drop-shadow-2xl border border-gray-400">
        <div className="flex items-center">
          <div className="flex flex-col text-black w-full">
            <div className='self-center justify-center align-middle'>
              <img className="scale-25" src={websiteLogo} alt="folder-image"/>
            </div>
            <div className="md:text-4xl self-center justify-center align-middle">
              <div className="">
                <div className="">
                  iOS Developer
                </div>
                <div className="pl-5">
                  Frontend Developer
                </div>
                <div className="pl-10">
                  Student at UNC Chapel Hill 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  ) 
}

export default About