import React from 'react'


const About = (props) => {
  return (props.trigger) ? (
    <div className="bg-slate-600 drop-shadow-xl self-center align-middle w-4/6">
      <div> bout Will</div>
      <button onClick={() => props.setTrigger(false)}>Close Window</button>
    </div>
  ) : "";
}

export default About