import { useState, useRef } from "react";
// import "./styles.css";

function CounterUseRef() {
  const [stateCount, setStateCount] = useState(0);
  const refCount = useRef(0);
  let varCount = 0;
  function upState() {
    setStateCount(stateCount + 1);
    console.log("stateCount : ", stateCount);
  }
  function upRef() {
    ++refCount.current;
    console.log("refCount : ", refCount.current);
  }
  function upVar() {
    ++varCount;
    console.log("varCount : ", varCount);
  }
  return (
    <div>
      <h3>useRef 사용 예시 - 변수 관리</h3>
      <div>stateCount : {stateCount} </div>
      <div>refCount : {refCount.current} </div>
      <div>varCount : {varCount} </div>
      <br />
      <button onClick={upState}>state up</button>
      <button onClick={upRef}>ref up</button>
      <button onClick={upVar}>var up</button>
    </div>
  );
}
export default CounterUseRef;
