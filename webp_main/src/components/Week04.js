import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Week.css";

export default function Week04() {
  return (
    <div className="Bg">
      <h2 className="Week">Week04</h2>
      <div className="Cards">
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="JSX"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week04/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week04/README.md"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image.png"
          title="JSX 코드 작성하기"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week04/book/build/index.html"
          link="https://github.com/seoftbh/24-1_React/tree/main/week04/book"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image-1.png"
          title="시계 만들기 1"
          desc="JS로 구현"
          cardLink="https://seoftbh.github.io/24-1_React/week04/clock/clock.html"
          link="https://github.com/seoftbh/24-1_React/blob/main/week04/clock/clock.html"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image-2.png"
          title="시계 만들기 2"
          desc="JSX로 구현"
          cardLink="https://seoftbh.github.io/24-1_React/week04/clock/reactClock.html"
          link="https://github.com/seoftbh/24-1_React/blob/main/week04/clock/reactClock.html"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image-3.png"
          title="바이너리 시계"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week04/clock/binaryClock.html"
          link="https://github.com/seoftbh/24-1_React/blob/main/week04/clock/binaryClock.html"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image-4.png"
          title="과제 1"
          desc="간단한 자기소개서 만들기"
          cardLink="https://seoftbh.github.io/24-1_React/week04/report-aboutPage/about-html.html"
          link="https://github.com/seoftbh/24-1_React/tree/main/week04/report-aboutPage"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image-5.png"
          title="과제 2"
          desc="Figma로 SPA(Single Page App) 기획하기"
          cardLink="https://www.figma.com/proto/LVPd0Gyv26a39fy5Nsi3Nz/Untitled?node-id=1-3&starting-point-node-id=1%3A3&mode=design&t=MyJHVinETmfVw13U-1"
          link="https://www.figma.com/proto/LVPd0Gyv26a39fy5Nsi3Nz/Untitled?node-id=1-3&starting-point-node-id=1%3A3&mode=design&t=MyJHVinETmfVw13U-1"
        />
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="예제 코드"
          desc="ch03"
          cardLink="https://seoftbh.github.io/24-1_React/week04plus/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week04plus/README.md"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04plus/md/react_createElement.png"
          title="React Elements 생성하기"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week04plus/ch03ex/build/"
          link="https://github.com/seoftbh/24-1_React/tree/main/week04plus/ch03ex/src"
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
      </div>
    </div>
  );
}
