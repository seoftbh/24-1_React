import { useRef, useEffect } from "react";

function DOMFocus() {
  const inputRef = useRef();
  function focus() {
    inputRef.current.focus();
    console.log(inputRef.current);
  }
  return (
    <div>
      <h3>useRef 사용 예시 - DOM 요소 선택</h3>
      <input ref={inputRef} type="text" placeholder="아이디 또는 이메일" />
      <button>Login</button>
      <br />
      <button onClick={focus}>focus</button>
    </div>
  );
}

export default DOMFocus;
