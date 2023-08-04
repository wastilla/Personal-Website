import React from 'react'
import Datetime from "./Datetime";
import { pixelComputer } from '../assets';

export const BottomBar = () => {

    return(
        <div className="flex flex-row h-10 bg-[url('/src/assets/bottom-bar.png')] bg-repeat-x bg-contain items-center">
            <div className="basis-11/12">
                {/* <img className="h-12" src={startButton} alt="folder-image"/> */}
                <div className="pt-1.5 pl-3 flex flex-row bg-[url('/src/assets/green-bg.png')] w-fit bg-cover h-10 shadow-2xl rounded-r-lg space-x-2">
                    <img src={pixelComputer} className="w-8 h-8"/>
                  <text className="startLogo pr-3 text-xl">wastilla</text>
                </div>
            </div>
            <div className="pl-3 pr-3 pt-1.5 flex flex-col basis-1/12 bg-[url('/src/assets/tb-2.png')] bg-cover shadow h-10 -mt-2 -mb-2 rounded-l-md items-center">
                <Datetime className="align-middle self-center justify-center"/>
            </div>
            
        </div>
    )
}

export default BottomBar