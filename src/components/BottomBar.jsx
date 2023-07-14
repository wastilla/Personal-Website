import React from 'react'
import Datetime from "./Datetime";

export const BottomBar = () => {

    return(
        <div className="flex flex-row h-fit bg-[url('/src/assets/bottom-bar.png')] bg-repeat-x sm:bg-contain bg-cover items-center">
            <div className="basis-11/12 -mt-1.5 -mb-2">
                <img className="h-12" src='/src/assets/start-button.png' alt="folder-image"/>
            </div>
            <Datetime className="basis-1/12 pr-20 align-middle"/>
        </div>
    )
}

export default BottomBar