import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Week.css";

export default function Week03() {
  return (
    <div className="Bg">
      <a href="https://github.com/seoftbh/24-1_React/week03/">
        <h2 className="Week">Week03</h2>
      </a>
      <div className="Cards">
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="React build 및 호스팅"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week03/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week03/README.md"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week03/md/img1.gif"
          title="Hello World!"
          desc="React build"
          cardLink="https://seoftbh.github.io/24-1_React/week03/build/index.html"
          link="https://github.com/seoftbh/24-1_React/tree/main/week03/build"
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
        <div className="Dummy"></div>
      </div>
    </div>
  );
}