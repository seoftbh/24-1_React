import React from "react";
import MultiActionAreaCard from "./MultiActionAreaCard";
import "./Week.css";

export default function Week07() {
  return (
    <div className="Bg">
      <a href="https://github.com/seoftbh/24-1_React/week07/">
        <h2 className="Week">week07</h2>
      </a>
      <div className="Cards">
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="Hook"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week07/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week07/README.md"
        />
        <MultiActionAreaCard
          imgUrl="./img/md_img.png"
          title="예제 코드"
          desc="ch06"
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/"
          link="https://github.com/seoftbh/24-1_React/blob/main/week07plus/README.md"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_basic_usestate_ex.gif"
          title="useState 예제"
          desc="카운터, 텍스트 입력 필드, 체크박스, 입력 양식"
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/ch06ex/build-basic_usestate_ex/"
          link="https://github.com/seoftbh/24-1_React/tree/4b6ec0c02575a3a5ea25880203b7d00ca1a039ee/week07plus/ch06ex/src"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_useState_counter.gif"
          title="이전 상태를 기준으로 상태 업데이트"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/ch06ex/build-usestate_counter/"
          link="https://github.com/seoftbh/24-1_React/tree/10c9ab03ac3fc40d16e1133d7390aa978d33bcdd/week07plus/ch06ex/src"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_useState_form.gif"
          title="객체를 이용한 상태"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/ch06ex/build/"
          link="https://github.com/seoftbh/24-1_React/tree/10c9ab03ac3fc40d16e1133d7390aa978d33bcdd/week07plus/ch06ex/src"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_todolist.gif"
          title="배열을 이용한 상태"
          desc="To do list"
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/todolist/build"
          link="https://github.com/seoftbh/24-1_React/tree/10c9ab03ac3fc40d16e1133d7390aa978d33bcdd/week07plus/todolist/src"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_immer.gif"
          title="immer라이브러리 사용"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/immer/build/"
          link="https://github.com/seoftbh/24-1_React/tree/10c9ab03ac3fc40d16e1133d7390aa978d33bcdd/week07plus/immer"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_initializer_todo.gif"
          title="초기 상태 패싱"
          desc="initializer 함수 패싱, 초기 상태를 직접 패싱"
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/ch06ex2/build-initializer_todo/"
          link="https://github.com/seoftbh/24-1_React/tree/10c9ab03ac3fc40d16e1133d7390aa978d33bcdd/week07plus/ch06ex2/src"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_resetting_form.gif"
          title="key로 상태 재설정"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/ch06ex2/build-resetting_form/"
          link="https://github.com/seoftbh/24-1_React/blob/10c9ab03ac3fc40d16e1133d7390aa978d33bcdd/week07plus/ch06ex2/src/Form.js#L1-L13"
        />
        <MultiActionAreaCard
          imgUrl="https://github.com/seoftbh/24-1_React/raw/main/week07plus/md/react_storing_count.gif"
          title="이전 렌더링에서 정보 저장"
          desc=""
          cardLink="https://seoftbh.github.io/24-1_React/week07plus/ch06ex2/build/"
          link="https://github.com/seoftbh/24-1_React/blob/10c9ab03ac3fc40d16e1133d7390aa978d33bcdd/week07plus/ch06ex2/src/CountLabel.js#L1-L16"
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