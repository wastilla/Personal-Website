import React from 'react'
import About from './About';
import Popup from './Popup';
import { useEffect, useState } from 'react'
import { desktopButtons, about } from '../constants';

const Desktop = () => {
    const [PopUp, setPopUp] = useState(false);
    const [contentId, setContentId] = useState("");

    var contentid;

    function handleButtonClick(buttonId){
        switch (buttonId) {
            case 'about':
            setContentId("about");
              console.log(contentid)
              setPopUp(true)
              break;
            case 'work':
              setContentId("work");
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
    <div className='flex'>
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
        {contentId && <Popup trigger={PopUp} setTrigger={setPopUp} contentid={contentId}/>}
    </div>
  )
}

export default Desktop