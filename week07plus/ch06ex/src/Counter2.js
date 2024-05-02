import { useState } from "react";
export default function Counter2() {
  const [age, setAge] = useState(42);
  function increment() {
    setAge(age + 1);
  }
  return (
    <>
      <h1>Your age: {age}</h1>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </>
  );
}
