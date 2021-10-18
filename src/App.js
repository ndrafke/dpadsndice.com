import React, {useState, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import MountEffect from './components/MountEffect.js';
import Home from './sections/Home.js';
import About from './sections/About.js';
import Follow from './sections/Follow.js';

const App = () => {

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      let timer = setTimeout(() => setIsLoading(false), 1500);
       return() => {
           clearTimeout(timer);
       }

  }, []); 

return(
    isLoading ? <MountEffect /> : 
    <div>
    <Navigation />    
    <Home />
    <About /> 
    <Follow />   
    </div>
)
}
export default App