import React, { useState, useRef } from "react";
const InputSample = () => {
  const [inputs, setInputs] = useState({
    이름: "",
    nickname: "",
  });
  const nameFocus = useRef();
  const { 이름, nickname } = inputs;
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      이름: "",
      nickname: "",
    });
    nameFocus.current.focus();
  };
  return (
    <div>
      <h3>useRef 사용 예시 - DOM 요소 선택 2</h3>
      <input
        name="이름"
        placeholder="이름"
        onChange={onChange}
        value={이름}
        ref={nameFocus}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값:</b>
        {이름}({nickname})
      </div>
    </div>
  );
};
export default InputSample;
