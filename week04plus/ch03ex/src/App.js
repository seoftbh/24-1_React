// import logo from './logo.svg';
import './App.css';
import Greeting1 from './Greeting1';
import Greeting2 from './Greeting2';

function App() {
  return (
    <div className="App">
      <h3>createElement로 생성</h3>
      <Greeting1 />
      <h3>createElement 없이 생성</h3>
      <Greeting2 />
    </div>
  );
}

export default App;
