import { useState, useTransition } from "react";
let a = new Array(10000).fill(0);
function Transition2() {
  let [name, setName] = useState("");
  let [isPending, startTransition] = useTransition();
  return (
    <div>
      <h3>useTransition 사용</h3>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      {isPending
        ? "로딩 중"
        : a.map(() => {
            return <div>{name}</div>;
          })}
    </div>
  );
}

export default Transition2;