import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Week.css";

export default function Week09() {
  return (
    <div className="Bg">
      <a href="https://github.com/seoftbh/24-1_React/week09/">
        <h2 className="Week">Week09</h2>
      </a>
      <div className="Cards">
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="Built-in React Hooks"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week09/README.md"
        />
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="예제 코드"
          desc="ch07, ch07-1"
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week09plus/README.md"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_UseReducer.gif"
          title="useReducer"
          desc="init 함수, useState"
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useReducer/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useReducerEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_UseContext.gif"
          title="useContext 예제 1"
          desc="state와 props, context"
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useContext/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/components"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_change_context.gif"
          title="useContext 예제 2"
          desc="context의 값 변경하기"
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-change_context/"
          link="https://github.com/seoftbh/24-1_React/blob/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useContextEx/ChangeContext.js#L1-L25"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useRef1.gif"
          title="useRef - 변수 관리"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useRef1/"
          link="https://github.com/seoftbh/24-1_React/blob/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useRefEx/CounterUseRef.js#L1-L33"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useRef2.gif"
          title="useRef - DOM 요소 선택"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useRef2/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useRefEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useImperativeHandle.gif"
          title="useImperativeHandle"
          desc="상위 컴포넌트에게 커스텀 함수 노출하기"
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useImperativeHandle/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useImperativeHandleEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useEffect.gif"
          title="useEffect - 기본 예제"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useEffect/"
          link="https://github.com/seoftbh/24-1_React/blob/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useEffectEx/UseEffectTest.js#L1-L17"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useEffect2.gif"
          title="useEffect의 세 가지 사용 방법"
          desc="무한 반복, 처음에만 실행, 의존성 배열 사용하기"
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useEffect2/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useEffectEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useEffect3.gif"
          title="useEffect - cleanup"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useEffect3/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useEffectEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useLayoutEffect.gif"
          title="useLayoutEffect 예제 1"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build-useLayoutEffect/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useLayoutEffectEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7/react_useLayoutEffect2.gif"
          title="useLayoutEffect 예제 2"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07ex/build/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07ex/src/useLayoutEffectEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7_1/react_useMemo.gif"
          title="useMemo"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07_1ex/build-useMemo/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07_1ex/src/useMemoEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7_1/react_useCallback.gif"
          title="useCallback"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07_1ex/build-useCallback/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07_1ex/src/useCallbackEx/components"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7_1/react_useTransition.gif"
          title="useTransition 예제 1"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07_1ex/build-useTransition/"
          link="https://github.com/seoftbh/24-1_React/tree/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07_1ex/src/useTransitionEx"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week09plus/md/7_1/react_useTransition2.gif"
          title="useTransition 예제 2"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week09plus/ch07_1ex/build/"
          link="https://github.com/seoftbh/24-1_React/blob/978cb865c63f451e4e7632d0254a4e4377f74482/week09plus/ch07_1ex/src/useTransitionEx/Home.js#L1-L25"
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