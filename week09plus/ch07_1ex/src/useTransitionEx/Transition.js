import { useState } from "react";
let a = new Array(10000).fill(0);
function Transition() {
  let [name, setName] = useState("");
  return (
    <div>
      <h3>useTransition 미사용</h3>
      <input
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {a.map(() => {
        return <div>{name}</div>;
      })}
    </div>
  );
}

export default Transition;