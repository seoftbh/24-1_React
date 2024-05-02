// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";
import TodoList2 from "./TodoList2";
import Form from "./Form";
import CountLabel from "./CountLabel";

function App() {
  const [version, setVersion] = useState(0);
  const [count, setCount] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }
  return (
    <div className="App">
      {/* <h3>TodoList.js</h3>
      <TodoList />

      <hr></hr>
      <h3>TodoList2.js</h3>
      <TodoList2 /> */}

      {/* <button onClick={handleReset}>Reset</button>
      <Form key={version} /> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <CountLabel count={count} />
    </div>
  );
}

export default App;
