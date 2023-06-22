import React from 'react'


const About = (props) => {
  return (props.trigger) ? (
    <div className="bg-slate-600 drop-shadow-xl self-center z-10 w-5/6 align-middle bg-[url('/src/assets/bottom-bar.png')] bg-cover rounded-lg p-2 pt-2 pb-2">
      <div className='flex flex-col space-y-2'>
        <div className="flex flex-row">
          <div className="flex basis-full">
            <img className="h-7 w-8 hover:h-6"src='/src/assets/folder-icon.png' alt="folder-image"/>
            About
          </div>
          
          <button className="justify-end" onClick={() => props.setTrigger(false)}>
            <img className="h-7 w-7.5"src='/src/assets/x-button.png' alt="folder-image"/>
          </button> 
        </div>
        
        <div className="bg-slate-200"> 
          
          <div>content mane</div>
          <div>content mane</div>
        </div>
      </div>
      
    </div>
  ) : "";
}

export default About