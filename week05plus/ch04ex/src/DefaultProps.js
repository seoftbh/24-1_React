import React from "react";

function DefaultProps({ name, color }) {
  return (
    <div>
      <main>
        <h1 style={{ color }}>안녕하세요. {name} 입니다.</h1>
      </main>
    </div>
  );
}
// 프로퍼티 기본값 지정
DefaultProps.defaultProps = {
  name: "디폴트",
};
export default DefaultProps;
