import React, { useState } from "react";
import './Form.css'

function Form() {
  // 입력 정보
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  // 오류 메시지
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [pwConfirmError, setPwConfirmError] = useState("");
  // 유효성 검사
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPwConfirm, setIsPwConfirm] = useState(false);

  // 이름 유효성 검사
  const onChangeName = (e) => {
    const currentName = e.target.value;
    setName(currentName);
    const nameRegex = /^[가-힣a-zA-Z]+$/;
    if (!nameRegex.test(currentName) || currentName.length < 1) {
      setNameError("올바른 이름을 입력해주세요.");
      setIsName(false);
    } else {
      setNameError("");
      setIsName(true);
    }
  };
  // 이메일 유효성 검사
  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(currentEmail)) {
      setEmailError("이메일의 형식이 올바르지 않습니다.");
      setIsEmail(false);
    } else {
      setEmailError("");
      setIsEmail(true);
    }
  };
  // 비밀번호 유효성 검사
  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    if (!passwordRegex.test(currentPassword)) {
      setPasswordError(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordError("");
      setIsPassword(true);
    }
  };
  // 비밀번호 재입력 검사
  const onChangePwConfirm = (e) => {
    const confirmPw = e.target.value;
    setPwConfirm(confirmPw);
    if (password !== confirmPw) {
      setPwConfirmError("비밀번호가 일치하지 않습니다.");
      setIsPwConfirm(false);
    } else {
      setPwConfirmError("");
      setIsPwConfirm(true);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isName && isEmail && isPassword && isPwConfirm) {
      alert(`${name}님 환영합니다!`);
      // 방법1) 새로 고침
      window.location.reload();
      // 방법2) 필드값 초기화
      setName("");
      setEmail("");
      setPassword("");
      setPwConfirm("");
      setIsName(false);
      setIsEmail(false);
      setIsPassword(false);
      setIsPwConfirm(false);
    } else {
      alert("입력한 정보를 다시 확인해 주세요.");
    }
  };

  return (
    <div className="form">
      <h1>회원정보 입력</h1>
      <form className="formBody" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="name">이름</label>
          <input id="name" name="name" value={name} onChange={onChangeName} />
          <p className="message">{nameError}</p>
        </div>
        <div className="field">
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            placeholder="example@example.com"
            value={email}
            onChange={onChangeEmail}
          />
          <p className="message">{emailError}</p>
        </div>
        <div className="field">
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            name="password"
            value={password}
            onChange={onChangePassword}
          />
          <p className="message">{passwordError}</p>
        </div>
        <div className="field">
          <label htmlFor="pwConfirm">비밀번호 확인</label>
          <input
            id="pwConfirm"
            name="pwConfirm"
            value={pwConfirm}
            onChange={onChangePwConfirm}
          />
          <p className="message">{pwConfirmError}</p>
        </div>
        <button type="submit">확인</button>
      </form>
    </div>
  );
}

export default Form;
