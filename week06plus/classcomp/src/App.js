import logo from './logo.svg';
import './App.css';
import ClassComp from './ClassComp';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h3>ClassComp.js</h3>
      <ClassComp />
      
      <hr></hr>
      <h3>Counter.js</h3>
      <Counter />
    </div>
  );
}

export default App;
