import React from 'react'
import About from './About';
import { useEffect, useState } from 'react'
import { desktopButtons } from '../constants';

const Desktop = () => {
    const [aboutPopUp, setAboutPopUp] = useState(false);

  return (
    <div className='flex'>
        <div className="flex flex-col">
            <div className="grid grid-rows-3 gap-0">
                {desktopButtons.map((button) =>(
                    <button key={button.id} onClick={() => 
                    { 
                        switch(button.title){
                        case 'About':
                            return setAboutPopUp(true)
                        } 
                    }  } className='w-24 h-30 flex flex-col scale-50'>
                        <img className="" src={button.image_title} alt={button.alt_image_title}/>
                        <label className="text-2xl">{button.title}</label>
                    </button>
                ))}
            </div>
           
        </div>
        <About trigger={aboutPopUp} setTrigger={setAboutPopUp}></About>
    </div>
  )
}

export default Desktop