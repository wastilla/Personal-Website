import React from 'react'
import Popup from './Popup';

import { useEffect, useState } from 'react'
import { desktopButtons } from '../constants';

const Desktop = () => {
    const [PopUp, setPopUp] = useState(false);
    const [contentId, setContentId] = useState("");

    var contentid;

    function handleButtonClick(buttonId){
        switch (buttonId) {
            case 'about':
              setContentId("about");
              setPopUp(true)
              break;
            case 'projects':
              setContentId("projects");
              console.log(contentid)
              setPopUp(true)
              break;
            case 'experience':
              setContentId("experience");
              console.log(contentid)
              setPopUp(true)
              break;
            case 'contact':
                console.log("here")
              setContentId("contact");
              console.log(contentid)
              setPopUp(true)
            default:
              break;
        }
    }

  return (
    <div className="flex h-fit z-0">
        
        <div className="flex flex-col">
            <div className="grid grid-rows-3 gap-0">
                {desktopButtons.map((button) =>(
                    <button key={button.id} onClick={() => 
                    { handleButtonClick(button.id) }  } className='w-24 h-30 flex flex-col scale-50'>
                        <img src={button.image_title} alt={button.alt_image_title}/>
                        <label className="text-3xl">{button.title}</label>
                    </button>
                ))}
            </div>
           
        </div>
        <div className="self-center align-middle pt-20 pb-20  pr-10">
          {contentId && <Popup trigger={PopUp} setTrigger={setPopUp} contentid={contentId}/>}
        </div>
        
    </div>
  )
}

export default Desktop