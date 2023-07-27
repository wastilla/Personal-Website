import { BrowserRouter } from "react-router-dom";
import{ About, Contact, Experience, Navbar, Feedbacks, Hero, Tech, Works, StarsCanvas} from './components';
import Desktop from "./components/Desktop";
import BottomBar from "./components/BottomBar";
import LoadingScreen from "./components/LoadingScreen";
import './index.css'

const App = () => {
 

  return ( 
      <BrowserRouter className="">
        <LoadingScreen className="absolute w-full h-screen top-0 z-20 animate-spin"/>
        <div className="App absolute w-full top-0 -z-50 flex flex-col bg-primary min-h-screen bg-[url('/src/assets/windows_bg.png')] bg-cover bg-no-repeat bg-center justify-between">  
          
          <div className="h-fit">
              <Desktop/> 
          </div>
          <BottomBar/>
        </div>
        
      </BrowserRouter>
      
  
  )
}

export default App
