import React from 'react'
import { websiteLogo } from '../assets'
import { ComputersCanvas } from './canvas'

const General = () => {

    return(
        <div className="flex items-center">
          <div className="flex flex-col text-black w-full">
            <div className='self-center justify-center align-middle'>
              <img className="scale-25" src={websiteLogo} alt="folder-image"/>
            </div>
            <div className="sm:text-4xl md:text-4xl self-center justify-center align-middle flex flex-col space-y-6">
              <div className="justify-center align-middle self-center">
                <div className="flex flex-col self-center">
                  <text className='self-center'>iOS Developer</text>
                </div>
                <div className="flex flex-col self-center -mx-8">
                  <text className='self-center -mb-10'>Fullstack Developer</text>
                  <ComputersCanvas className="max-w-fit xs:w-2"/>
                </div>
                <div className="self-center flex flex-col space-y-1">
                  <text className='self-center'>Student at UNC</text>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}


export default General