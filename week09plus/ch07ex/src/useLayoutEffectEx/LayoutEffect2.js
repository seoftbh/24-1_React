import { useLayoutEffect, useState } from "react";
export default function LayoutEffect2() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  useLayoutEffect(() => {
    setAge(30);
    setName("길동");
  }, []);
  return (
    <>
      <h3>useLayoutEffect를 사용</h3>
      <div className="App">{`그의 이름은 ${name} 이며, 
나이는 ${age}살 입니다.`}</div>
    </>
  );
}
