import { useEffect, useState } from "react";
export default function LayoutEffect() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    setAge(30);
    setName("길동");
  }, []);
  return (
    <>
    <h3>useEffect를 사용</h3>
      <div className="App">{`그의 이름은 ${name} 이며, 
나이는 ${age}살 입니다.`}</div>
    </>
  );
}
