import Form from './components/form/Form.js'
import Get from './components/getData/Get.js';
import './App.css';
import '../src/components/card/card.css'
import '../src/components/form/form.css'
import '../src/components/getData/get.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Form/>
      <Get/>    
      </header>
    </div>
  );
}

export default App;
