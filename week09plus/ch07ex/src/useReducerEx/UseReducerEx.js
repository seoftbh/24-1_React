import React from "react";
import Counter from "./Counter";
import Counter_initFn from "./Counter_initFn";
import Counter_useState from "./Counter_useState";

function UseReducerEx() {
  return (
    <div>
      <h3>init 함수를 사용하지 않는 카운터</h3>
      <Counter />

      <hr></hr>
      <h3>init 함수를 사용한 카운터</h3>
      <Counter_initFn />
      
      <hr></hr>
      <h3>useState를 사용한 카운터</h3>
      <Counter_useState />
    </div>
  );
}

export default UseReducerEx;
