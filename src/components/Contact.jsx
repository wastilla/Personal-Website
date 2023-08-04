import React from 'react'
import { contacts } from '../constants'

const Contact = () => {
  return (
    <div className="bg-white drop-shadow-2xl border border-gray-400 justify-center self-center w-fit flex flex-row flex-wrap text-black align-middle space-x-5">
      {contacts.map((contact) =>(
        <a href={contact.link} target="_blank" className="flex flex-col self-center align-middle justify-center p-4">
          <img className=" w-12 h-12 self-center"src={contact.icon} loading="lazy"/>
          <text className="self-center">{contact.name}</text>
        </a>
      ))}
    </div>
  )
}

export default Contact