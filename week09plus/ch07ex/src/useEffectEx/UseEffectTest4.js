import { useEffect, useState } from "react";
export default function UseEffectTest4() {
  const [firstCount, setFirstCounter] = useState(0);
  const [secondCount, setSecondCounter] = useState(0);
  useEffect(() => {
    console.log(`useEffect: ${Date()}`);
  }, [firstCount]);
  const firstCountHandler = (e) => {
    setFirstCounter((s) => s + 1);
  };
  const secondCountHandler = (e) => {
    setSecondCounter((s) => s + 1);
  };
  return (
    <div className="App">
      <h3>useEffect - 의존성 배열 사용</h3>
      <h1>{firstCount}</h1>
      <button onClick={firstCountHandler}>카운터 증가</button>
      <h1 id="hi">{secondCount}</h1>
      <button onClick={secondCountHandler}>카운터 증가</button>
    </div>
  );
}
