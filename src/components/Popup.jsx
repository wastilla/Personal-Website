import React from 'react'
import { ComputersCanvas } from './canvas'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';

const Popup = (props) => {

    const {contentid} = props;
    console.log(contentid)

    let childView;
    
    switch (contentid){
        case 'about':
            childView = <About/>
            break;
        case 'projects':
            childView = <Projects/>
            break;
        case 'experience':
            childView = <Experience/>
        case 'contact':
            childView = <Contact/>
            break;
        }

  return (props.trigger) ? (
    <div className="drop-shadow-xl self-center z-10 w-5/6 align-middle bg-[url('/src/assets/bottom-bar.png')] bg-cover rounded-lg p-2 pt-2 pb-2">
      <div className='flex flex-col space-y-2'>
        <div className="flex flex-row">
          <div className="flex basis-full">
            <img className="h-7 w-8"src='/src/assets/folder-icon.png' alt="folder-image"/>
            <p>{contentid}</p>
          </div>
          
          <button className="justify-end" onClick={() => props.setTrigger(false)}>
            <img className="h-7 w-7.5 hover:h-6"src='/src/assets/x-button.png' alt="folder-image"/>
          </button> 
        </div> 
        <div className="p-3 bg-amber-50"> 
          {childView}  
        </div>
      </div>
      
    </div>
  ) : "";
}

export default Popup