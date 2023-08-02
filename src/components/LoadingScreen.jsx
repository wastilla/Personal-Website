import { reactjs } from "../assets";
import { useState, useEffect } from "react";
import { loadingBar, websiteLogoBlack } from "../assets";
import WastillaCanvas from "./canvas/wastilla";


const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const l = setTimeout(() => {
        
            setAnimate(true);
            const close = setTimeout(() => { 
                setLoading(false)
                return () => clearTimeout(close);
            }, 5000);

        }, 10000); 
        
        return () => clearTimeout(l);
    }, []);

    if(loading){
        return (
            <div className={`App fixed inset-0 z-50 ${animate ? "tv-off" : ""}`}>
                    {/* <div className={`absolute top-0 z-50 bg-pixelated bg-cover bg-repeat bg-center w-full h-screen opacity-5`}></div> */}
                    {/* <div className={`absolute pointer-events-none top-0 z-50 bg-flicker bg-cover bg-repeat bg-center w-full h-full opacity-10`}></div> */}
                    <div id="loadingScreen" className="absolute top-0 z-40 h-full flex flex-col w-full bg-black align-middle self-center">
                        <img className="w-fit self-center fade-in -mb-72"src={websiteLogoBlack}/>
                        {/* <img className="w-fit self-center" src={loadingBar}/> */}
                        <WastillaCanvas className="fade-in"/>
                        <div className="absolute bottom-1 flex flex-row -space-x-2 w-screen pl-2 pr-4">
                            <text className="text-xl w-11/12 align-middle">Copyright © Will Astilla</text>
                            <text className="text-2xl startLogo align-middle self-center">WASTILLA™</text>
                        </div>
                        
                    </div>
                
            </div>
        )
    }
}

export default LoadingScreen