import React from 'react'
import Datetime from "./Datetime";

export const BottomBar = () => {

    return(
        <div className="flex flex-row h-fit bg-[url('/src/assets/bottom-bar.png')] bg-repeat-x sm:bg-contain bg-cover items-center">
            <div className="basis-11/12">
                <img className="scale-125" src='/src/assets/start-button.png' alt="folder-image"/>
            </div>
            <Datetime className="basis-1/12 pr-20"/>
        </div>
    )
}

export default BottomBar