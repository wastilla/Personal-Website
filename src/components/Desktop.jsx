import React from 'react'
import About from './About';
import { useEffect, useState } from 'react'

const Desktop = () => {
    const [aboutPopUp, setAboutPopUp] = useState(false);
  return (
    <div className='flex'>
        <div className="flex flex-col">
            <div className="grid grid-rows-3 gap-0">
                <div className="scale-50">
                    <img src='/src/assets/folder-icon.png' alt="folder-image"/>
                </div>
                <div className="scale-50">
                    <img src='/src/assets/folder-icon.png' alt="folder-image"/>
                </div>
                <div className="scale-50">
                    <img src='/src/assets/folder-icon.png' alt="folder-image"/>
                </div>
                <div className="scale-50">
                    <img src='/src/assets/folder-icon.png' alt="folder-image"/>
                </div>
                <button onClick={() => setAboutPopUp(true)} className='w-24 h-30 flex flex-col scale-50'>
                        <img className="" src='/src/assets/folder-icon.png' alt="folder-image"/>
                        <label className="text-2xl">About</label>
                </button>
            </div>
           
        </div>
        <About trigger={aboutPopUp} setTrigger={setAboutPopUp}></About>
    </div>
  )
}

export default Desktop