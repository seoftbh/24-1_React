import React from "react";
import PropTypes from "prop-types"; // 프로퍼티 타입을 지정해주기 위해 사용

function RequiredProps({ name, color }) {
  return (
    <div>
      <main>
        <h1 style={{ color }}>안녕하세요. {name} 입니다.</h1>
      </main>
    </div>
  );
}
// 프로퍼티 타입 지정 및 필수값 설정
RequiredProps.propTypes = {
  name: PropTypes.string.isRequired,
};
export default RequiredProps;
