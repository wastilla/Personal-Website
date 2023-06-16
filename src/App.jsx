import { BrowserRouter } from "react-router-dom";
import{ About, Contact, Experience, Navbar, Feedbacks, Hero, Tech, Works, StarsCanvas} from './components';
import Desktop from "./components/Desktop";

const App = () => {
  return ( 
    <BrowserRouter className="bg-white">
      <div className="h-screen flex flex-col relative z-0 bg-primary">
        
        {/* <Navbar className=""/> */}
        {/* <Hero /> */}
        <div className="h-full bg-[url('/src/assets/windows_bg.png')] bg-cover bg-no-repeat bg-center">
          <Desktop/>
        </div>
        <div className="h-fit bg-[url('/src/assets/bottom-bar.png')] bg-repeat-x sm:bg-contain bg-cover">
          <img className="scale-125"src='/src/assets/start-button.png' alt="folder-image"/>
        </div>
 
        
        
        {/* <About />
        <Experience />
        <Tech />
        <Works/>
        <Feedbacks/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>  */}
      </div>
    </BrowserRouter>
  )
}

export default App
