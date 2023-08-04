import { useState, useEffect } from "react";
import { websiteLogoBlack, hourglass } from "../assets";


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

        }, 1000); 
        
        return () => clearTimeout(l);
    }, []);

    if(loading){
        return (
            <div className={`App fixed inset-0 z-50 ${animate ? "tv-off" : ""}`}>
                    <div id="loadingScreen" className="absolute top-0 z-40 h-full flex flex-col w-full bg-black align-middle self-center">
                        <img className="w-fit self-center fade-in"src={websiteLogoBlack}/>
                        <img className="self-center h-1/6" src={hourglass}/>
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