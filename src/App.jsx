import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen';
import "./index.css"

function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>{<LoadingScreen onComplete = {() => setIsLoaded(true)}/>}</>
  );
}

export default App
