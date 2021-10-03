
import { useState } from 'react';
import  Header  from './componets/Header';
import Characters from './componets/Characters';
import './App.css';



function App() {

  const [darkMode, setDarkMode] = useState(false);
    const handleClick = () =>{
        setDarkMode(!darkMode);
    }

  return (
    <div className='App'>
      <div className= {darkMode ? 'dark-mode' : 'light-mode'} >
      <h1>Práctica de ReactHooks</h1>
      <button type='button' onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>              
      <Characters />
      
      </div>     
      
      
     
    </div>
  );
}

export default App;
