import { useState,useEffect} from 'react';
import Coffees from './coffees';
//import ConditionalRender from './ConditonalRender';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);//useState returns an array 0 makes it start at 0
  const [userName,setUserName] = useState('')
  useEffect(() =>{
    setCounter(500)
    console.log('useEffect was run...')
  }, [counter])
    return (
    <div className="App">
      <header className="App-header">
      <h1>Counter {counter}</h1>
      <div className='button-group'>
      <button onClick={() => setCounter(counter + 1)}> + </button>
      <button onClick={() => setCounter(counter - 1)}> - </button>
      <button onClick={() => setCounter(0)}> reset </button>
      <Coffees/>
      <div>

      {counter > 5 
           ? (<div>went too far</div>) 
           : <div>Keep going!!!!</div>
      }

      </div>
     </div>
      </header>
    </div>
  );
}

export default App;
