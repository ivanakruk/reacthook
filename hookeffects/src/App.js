import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';


function App() {

  const [show, setShow] = useState(true);
  const handleClick = ()=> {
    setShow(false);
  }
  return (
    <div className="App">
     <button onClick={handleClick}>Dejar de mostrar el boton</button>
     { show && <Button/> }
    </div>
  );
}

export default App;
