import React from 'react'
import { ComputersCanvas } from './canvas'
import About from './About';
import Works from './Works';
import Contact from './Contact';


const Popup = (props) => {

    const {contentid} = props;
    console.log(contentid)

    let childView;
    
    switch (contentid){
        case 'about':
            childView = <About/>
            break;
        case 'work':
            childView = <Works></Works>
            break;
        case 'contact':
            childView = <Contact/>
            break;
        }
    

  return (props.trigger) ? (
    <div className="bg-slate-600 drop-shadow-xl self-center z-10 w-5/6 align-middle bg-[url('/src/assets/bottom-bar.png')] bg-cover rounded-lg p-2 pt-2 pb-2">
      <div className='flex flex-col space-y-2'>
        <div className="flex flex-row">
          <div className="flex basis-full">
            <img className="h-7 w-8 hover:h-6"src='/src/assets/folder-icon.png' alt="folder-image"/>
            <p>{contentid}</p>
          </div>
          
          <button className="justify-end" onClick={() => props.setTrigger(false)}>
            <img className="h-7 w-7.5 hover:h-6"src='/src/assets/x-button.png' alt="folder-image"/>
          </button> 
        </div>
        
        <div className="bg-slate-200 overflow-scroll"> 
          {childView}
        </div>
      </div>
      
    </div>
  ) : "";
}

export default Popup