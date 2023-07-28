import { reactjs } from "../assets";
import { useState, useEffect } from "react";
import { loadingBar, websiteLogoBlack } from "../assets";


const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log(loading.valueOf())
        const l = setTimeout(() => {
          setLoading(false);
        }, 5000); 
        
        return () => clearTimeout(l);
    }, []);

    if(loading){
        return (
            <div className={`fixed inset-0 z-50 tv-off`}>
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