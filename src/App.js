import './App.css';
import {useState} from 'react';
import Button from './components/Button.jsx';
import Screen from './components/Screen.jsx';
import Clearbutton from './components/ClearButton.jsx';

function App() {

  const [input, setInput] = useState('');
  const addInput = value => {
    setInput( input + value);
  }

  return (
    <div className="App">
      <div className="container-calculator">
        <Screen input = { input } />

        <div className="row">
          <Button manageClick={addInput}> 1 </Button>
          <Button manageClick={addInput}> 2 </Button>
          <Button manageClick={addInput}> 3 </Button>
          <Button manageClick={addInput}> + </Button>
        </div>

        <div className="row">
          <Button manageClick={addInput}> 4 </Button>
          <Button manageClick={addInput}> 5 </Button>
          <Button manageClick={addInput}> 6 </Button>
          <Button manageClick={addInput}> - </Button>
          </div>

        <div className="row">
          <Button manageClick={addInput}> 7 </Button>
          <Button manageClick={addInput}> 8 </Button>
          <Button manageClick={addInput}> 9 </Button>
          <Button manageClick={addInput}> x </Button>
          </div>

        <div className="row">
          <Button manageClick={addInput}> = </Button>
          <Button manageClick={addInput}> 0 </Button>
          <Button manageClick={addInput}> = </Button>
          <Button manageClick={addInput}> / </Button>
          </div>

        <div className="row">
          <Clearbutton manageClear={() =>setInput('')} >
            Reset
            </Clearbutton>
        </div>
      </div>
    </div>
  );
}

export default App;
