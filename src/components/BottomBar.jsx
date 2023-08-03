import React from 'react'
import Datetime from "./Datetime";
import { startButton } from '../assets';

export const BottomBar = () => {

    return(
        <div className="flex flex-row h-fit bg-[url('/src/assets/bottom-bar.png')] bg-repeat-x sm:bg-contain bg-cover items-center">
            <div className="basis-11/12 -mt-1.5 -mb-2">
                <img className="h-12" src={startButton} alt="folder-image"/>
            </div>
            <div className="pl-3 pr-3 flex basis-1/12 bg-[url('/src/assets/tb-2.png')] bg-repeat-x bg-cover shadow sm:bg-contain h-8 -mt-2 -mb-2 rounded-l-lg">
                <Datetime className="  align-middle self-center justify-center"/>
            </div>
            
        </div>
    )
}

export default BottomBar