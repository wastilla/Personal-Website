import { reactjs } from "../assets";
import { useState, useEffect } from "react";

const LoadingScreen = () => {
    const [loading, setLoading] = useState(true);

    // if (loadingScreen) {
    //     setTimeout(() => {
    //     loadingScreen.style.display = "none";
    //     setLoading(false)
    //     console.log(loading)
    //     }, 10);
    // }
    useEffect(() => {
        
        const loading = setTimeout(() => {
          setLoading(false);
        }, 5000); 
    
        return () => clearTimeout(loading);
    }, []);

    if(loading){
        return (
            <div class="thing" className="animate-pulse">
                    <div id="loadingScreen" className="flex flex-col w-full h-screen bg-black align-middle justify-center self-center ">
                        <img className="w-fit self-center"src="./src/assets/website-logo-black.png"/>
                        <img className="w-fit self-center" src="./src/assets/loading.gif"/>
                    </div>
                
            </div>
        )
    }
}

export default LoadingScreen