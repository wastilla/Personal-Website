import React from 'react'
import { websiteLogo } from '../assets'
import { useState } from 'react';
import General from "./General";
import Contact from './Contact';


const About = (props) => {

  const [selectedPage, setSelectedPage] = useState(<General/>);

  const handleButtonClick = (button) => {
    setSelectedPage(button);
  };

  return (
    <div>
      <div className="flex flex-row px-1">
          <button className = "shadow-inner bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2 border-r-0 border-b-0" onClick={() => handleButtonClick(<General/>)}>General</button>
          <button className = "bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2 border-b-0 " onClick={() => handleButtonClick(<Contact/>)}>Interests</button>
      </div>
      <div className="p-3 bg-white drop-shadow-2xl border border-gray-400">
        {selectedPage}
      </div>
    </div>

  ) 
}

export default About