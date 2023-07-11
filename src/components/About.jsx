import React from 'react'
import { ComputersCanvas } from './canvas'


const About = (props) => {
  return (
    <div>
      <div className="flex flex-row px-1 space-x-0.5">
          <button className = "bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2">About</button>
          <button className = "bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2">About</button>
          <button className = "bg-white border border-gray-400 rounded-t-lg w-fit text-black px-2">About</button>
      </div>
      <div className="p-3 bg-white drop-shadow-2xl border border-gray-400">
        <div className="flex items-center">
          <div className="grid grid-cols-2 gap-3 text-black">
            <div>W
              
            </div>
            <div>William Astilla
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
            <br></br>
            <div> Interests:
              <div className="pl-5">
                Fitness
              </div>
              <div className="pl-10">
                Running
              </div>
              <div className="pl-10">
                Weight Lifting
              </div>
              <div className="pl-5">
                Music
              </div>
              <div className="pl-10">
                Records/Vinyl
              </div>
              <div className="pl-10">
                Digital Music Production
              </div>
              <div className="pl-5">
                Fashion
              </div>
              <div className="pl-10">
                Sneaker Collecting
              </div>
              <div className="pl-10">
                Thrifting
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  ) 
}

export default About