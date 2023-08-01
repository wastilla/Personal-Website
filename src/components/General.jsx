import React from 'react'
import { websiteLogo } from '../assets'
import { ComputersCanvas } from './canvas'
import SmartphoneCanvas from './canvas/Smartphone'
import GradcapCanvas from './canvas/Gradcap'

const General = () => {

    return(
        <div className="flex items-center min-h-fit">
          <div className="flex flex-col text-black w-full">
            <div className='self-center justify-center align-middle -mb-10'>
              <img className="scale-25" src={websiteLogo} alt="folder-image"/>
            </div>
            <div className="sm:text-4xl md:text-4xl self-center justify-center align-middle flex flex-col space-y-6">
              <div className="justify-center align-middle self-center">
                <div className="flex flex-col self-center -mx-32 h-52">
                  <SmartphoneCanvas className="popup pb-2 mb-2 -mx-11"/>
                  <text className='self-center'>iOS Developer</text>  
                </div>
                <div className="flex flex-col self-center -mx-32 h-52 -mb-10">
                  <ComputersCanvas className="max-w-fit xs:w-2"/>
                  <text className='self-center'>Fullstack Developer</text> 
                </div>
                <div className="self-center flex flex-col space-y-1 -mx-32 h-52">
                  <GradcapCanvas className="w-5 pb-2 -mx-32"/>
                  <text className='self-center -mb-8'>Student at UNC</text>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default General