import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Week.css";

export default function Week88() {
  return (
    <div className="Bg">
      <h2 className="Week">Week88</h2>
      <div className="Cards">
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title=""
          desc=""
          cardLink=""
          link=""
        />
        <MultiActionAreaCard
          imgUrl=""
          title=""
          desc=""
          cardLink=""
          link=""
        />
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
      </div>
    </div>
  );
}