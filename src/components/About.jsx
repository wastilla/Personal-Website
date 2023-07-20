import React from 'react'
import { websiteLogo } from '../assets'


const About = (props) => {
  return (
    <div>
      <div className="flex flex-row px-1 space-x-0.5">
          <button className = "bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2">About</button>
      </div>
      <div className="p-3 bg-white drop-shadow-2xl border border-gray-400">
        <div className="flex items-center">
          <div className="grid grid-cols-2 gap-3 text-black">
            <div className='self-center justify-center align-middle'>
              <img className="scale-25" src={websiteLogo} alt="folder-image"/>
            </div>
            <div className="self-center">
              <div className="text-2xl">William Astilla
                <div className="pl-5">
                  iOS Developer
                </div>
                <div className="pl-5">
                  Frontend Developer
                </div>
                <div className="pl-5">
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