import React from "react";
function TwoProps(props) {
  return (
    <div>
      <main>
        <h1 style={{ color: props.color }}>안녕하세요. {props.name} 입니다.</h1>
      </main>
    </div>
  );
}
export default TwoProps;
