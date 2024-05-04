import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Week.css";

export default function Week00() {
  return (
    <div className="Bg">
      <h2 className="Week">Reports</h2>
      <div className="Cards">
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image-4.png"
          title="w04 - 과제 1"
          desc="간단한 자기소개서 만들기"
          cardLink="https://seoftbh.github.io/24-1_React/week04/report-aboutPage/about-html.html"
          link="https://github.com/seoftbh/24-1_React/tree/main/week04/report-aboutPage"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week04/md/image-5.png"
          title="w04 - 과제 2"
          desc="Figma로 SPA(Single Page App) 기획하기"
          cardLink="https://www.figma.com/proto/LVPd0Gyv26a39fy5Nsi3Nz/Untitled?node-id=1-3&starting-point-node-id=1%3A3&mode=design&t=MyJHVinETmfVw13U-1"
          link="https://www.figma.com/proto/LVPd0Gyv26a39fy5Nsi3Nz/Untitled?node-id=1-3&starting-point-node-id=1%3A3&mode=design&t=MyJHVinETmfVw13U-1"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week05/md/five_component.png"
          title="w05 - 과제"
          desc="5개 이상의 컴포넌트, 2개 이상의 props 사용하는 컴포넌트 포함하기"
          cardLink="https://seoftbh.github.io/24-1_React/week05/five_component/build/"
          link="https://github.com/seoftbh/24-1_React/tree/254760c2878c6461e5c5309f927ceb23606d524b/week05/five_component"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week06/md/five_component_with_state_demo.gif"
          title="w06 - 과제 1"
          desc="2개 이상의 state를 가진 컴포넌트 포함시키기"
          cardLink="https://seoftbh.github.io/24-1_React/week06/five_component_with_state/build/"
          link="https://github.com/seoftbh/24-1_React/tree/main/week06/five_component_with_state"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week06/md/sign_up_page_demo.gif"
          title="w06 - 과제 2"
          desc="회원가입 페이지 만들기"
          cardLink="https://seoftbh.github.io/24-1_React/week06/signup_page/build/"
          link="https://github.com/seoftbh/24-1_React/tree/main/week06/signup_page"
        />
        <div className="Dummy"></div>
        <div className="Dummy"></div>
        <div className="Dummy"></div>
      </div>
    </div>
  );
}
