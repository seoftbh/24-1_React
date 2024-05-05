import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Week.css";

export default function Week02() {
  return (
    <div className="Bg">
      <a href="https://github.com/seoftbh/24-1_React/week02/">
        <h2 className="Week">Week02</h2>
      </a>
      <div className="Cards">
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="HCJ, DOM, SPA & MPA"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week02/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week02/README.md"
        />
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="예제 코드"
          desc="ch02"
          cardLink="https://seoftbh.github.io/24-1_React/week02plus/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week02plus/README.md"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week02plus/md/react-button.png"
          title="버튼 만들기"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week02plus/ch02ex/build/"
          link="https://github.com/seoftbh/24-1_React/blob/e2e406cec9eb0cf8a589410f605de9a108145019/week02plus/ch02ex/src/App.js#L1-L13"
        />
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
      </div>
    </div>
  );
}
