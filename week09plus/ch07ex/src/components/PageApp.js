import { useState } from "react";
import Page from "./Page";
import { ThemeContext } from "./context/ThemeContext";
import Page2 from "./Page2";

function PageApp() {
  // 현제 App이 다크모드인지 아닌지 true, false로 정보를 받고 있다.
  const [isDark, setIsDark] = useState(false);
  // Page 자식 컴포넌트에게 해당 데이터를 props로 넘겨 주고 있다.
  return (
    <div>
      <h3>state와 props만 사용해서 만든 예제</h3>
      <Page isDark={isDark} setIsDark={setIsDark} />
      <hr></hr>
      <h3>context를 사용해서 만든 웹사이트</h3>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page2 />
      </ThemeContext.Provider>
    </div>
  );
}

export default PageApp;
