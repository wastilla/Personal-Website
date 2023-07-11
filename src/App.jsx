import { BrowserRouter } from "react-router-dom";
import{ About, Contact, Experience, Navbar, Feedbacks, Hero, Tech, Works, StarsCanvas} from './components';
import Desktop from "./components/Desktop";
import BottomBar from "./components/BottomBar";
import { useState, useEffect } from "react";

const App = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  	function getCurrentDimension(){
    	return {
      		width: window.innerWidth,
      		height: window.innerHeight
    	}
  	}
  
  	useEffect(() => {
    		const updateDimension = () => {
      			setScreenSize(getCurrentDimension())
    		}
    		window.addEventListener('resize', updateDimension);
    
		
    		return(() => {
        		window.removeEventListener('resize', updateDimension);
    		})
  	}, [screenSize])

  return ( 
    <BrowserRouter className="bg-white">
      <div className="App h-screen flex flex-col relative z-0 bg-primary">
        
        {/* <Navbar className=""/> */}
        {/* <Hero /> */}
        {/* <div className=""> */}
        {screenSize.height >= 570 ? (
          <div className="h-full bg-[url('/src/assets/windows_bg.png')] bg-cover bg-no-repeat bg-center">
            <Desktop/> 
          </div>
        ) : (
          <div className="h-fit bg-[url('/src/assets/windows_bg.png')] bg-cover bg-no-repeat bg-center">
            <Desktop/> 
          </div>
        )}
        
        <BottomBar/>

      </div>
    </BrowserRouter>
  )
}

export default App
