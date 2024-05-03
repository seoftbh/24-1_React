import React from "react";
import Content2 from "./Content2";
import Header2 from "./Header2";
import Footer2 from "./Footer2";
// isDark 를 실질적으로 사용하지 않고, 자녀 컴포넌트들에게 전달하는 역할
// data 필요하지 않음 !
const Page2 = () => {
  return (
    <div className="page">
      <Header2 />
      <Content2 />
      <Footer2 />
    </div>
  );
};
export default Page2;
