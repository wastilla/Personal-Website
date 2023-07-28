import { reactjs } from "../assets";
import { useState, useEffect } from "react";
import { loadingBar, websiteLogoBlack } from "../assets";


const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        console.log(loading.valueOf())
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
                    <div className={`absolute top-0 z-50 bg-pixelated bg-cover bg-repeat bg-center w-full h-screen opacity-5`}></div>
                    <div className={`absolute pointer-events-none top-0 z-50 bg-flicker bg-cover bg-repeat bg-center w-full h-full opacity-10`}></div>
                    <div id="loadingScreen" className="absolute top-0 z-40 h-full flex flex-col w-full bg-black align-middle justify-center self-center">
                        <img className="w-fit self-center"src={websiteLogoBlack}/>
                        <img className="w-fit self-center" src={loadingBar}/>
                    </div>
                
            </div>
        )
    }
}

export default LoadingScreen