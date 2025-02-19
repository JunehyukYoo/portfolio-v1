import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/sections/LoadingScreen';
import "./index.css"
import { Navbar } from './components/sections/Navbar';
import { MobileMenu } from './components/sections/MobileMenu';
import { Home } from './components/Home';
import { About } from './components/About';
import { Project } from './components/Projects';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>{!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)}/>}{" "}
    <div 
      className={`min-h-screen transition-opacity duration-700 
      ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}
    >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Project/>
    </div>

    </>
  );
}

export default App
