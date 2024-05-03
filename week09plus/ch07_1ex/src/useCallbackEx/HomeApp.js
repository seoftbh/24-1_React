// App.js
import React, { useState } from "react";
import SmartHome from "./components/SmartHome";
import SmartHome2 from "./components/SmartHome2";
const HomeApp = () => {
  return (
    // <div style={{ position: "absolute", top: "50%", left: "50%" }}>
    <div>
      <h3>useCallback 예제</h3>
      <SmartHome />
      <hr></hr>
      <h3>useCallback에 React.memo를 사용</h3>
      <SmartHome2 />
    </div>
  );
};
export default HomeApp;
