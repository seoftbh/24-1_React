import React, { useState } from "react";

export default function Counter() {
//   let count = 0;
  const [count, setCount] = useState(0)  // count라는 변수를 state로 사용
  // [ 0으로 초기화 (초기값 설정), 카운트 변경하는 함수를 지정 ]

  const [number, setNumber] = useState(0)

  // count, number 2개의 state를 선언함,
  // 그 state를 변경하는 함수는 각각 setCount, setNumber임
  

  const plus = () => {
    setCount(count+1)
    // count = count + 1;
    console.log(count); // 제대로 증가함
  };
  const minus = () => {
    setCount(count - 1)
    // count = count - 1;
    console.log(count); // 제대로 감소함
  };
  return (
    <div style={{ margin: 15 }}>
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}
