import './App.css';
import Button from './components/Button';
import ChangeTitle from './components/ChangeTitle';
import Title from './components/Title';

function App() {
  
  const persona = {
    name: 'pepito',
    age: 40
  }
  
  const example = ({name}) => {
    console.log(name);
  }
  example(persona);

  return (
    <div className="App">
      <header className="App-header">
        <ChangeTitle/>
      <Title/> 
       <Button text= 'Cliqueame!!' />      
      </header>
      <main className= 'app-main'>
      </main> 
      <footer className= 'app-footer'>

      </footer>
    </div>
  );
}

export default App;
