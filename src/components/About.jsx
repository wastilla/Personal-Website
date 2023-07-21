import React from 'react'
import { websiteLogo } from '../assets'


const About = (props) => {
  return (
    <div>
      <div className="flex flex-row px-1 space-x-0.5">
          <button className = "bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2">General</button>
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