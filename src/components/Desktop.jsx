import React from 'react'
import { useEffect, useState } from 'react'

const Desktop = () => {
  return (
    <div className="flex flex-col">
        <div className="grid grid-cols-3 gap-0">
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
            <button className='w-24 h-30 flex flex-col'>
                    <img className="w-24 h-26" src='/src/assets/folder-icon.png' alt="folder-image"/>
                    <label className="text-center">about</label>
            </button>
            

        </div>
    </div>
  )
}

export default Desktop