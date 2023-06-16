import { BrowserRouter } from "react-router-dom";
import{ About, Contact, Experience, Navbar, Feedbacks, Hero, Tech, Works, StarsCanvas} from './components';
import Desktop from "./components/Desktop";
import BottomBar from "./components/BottomBar";

const App = () => {
  return ( 
    <BrowserRouter className="bg-white">
      <div className="h-screen flex flex-col relative z-0 bg-primary">
        
        {/* <Navbar className=""/> */}
        {/* <Hero /> */}
        <div className="h-full bg-[url('/src/assets/windows_bg.png')] bg-cover bg-no-repeat bg-center">
          <Desktop/>
          
        </div>
        <BottomBar/>
  
      </div>
    </BrowserRouter>
  )
}

export default App
