import NumberProps from './NumberProps';
import OneProps from './OneProps';
import PropsType from './PropsType';
import TwoProps from './TwoProps';
import DefaultProps from './DefaultProps';
import RequiredProps from './RequiredProps';
import BooleanProps from './BooleanProps';

function PropsWorld() {
  return (
    <div>
      <h3>1개의 프로퍼티 넘기기</h3>
      <code>&lt;OneProps name="홍길동"/&gt;</code>
      <OneProps name="홍길동" />

      <hr></hr>
      <h3>2개의 프로퍼티 넘기기</h3>
      <code>&lt;TwoProps name="홍길순" color="magenta" /&gt;</code>
      <TwoProps name="홍길순" color="magenta" />

      <hr></hr>
      <h3>숫자 프로퍼티 넘기기</h3>
      <code>&lt;NumberProps name={9} color="DodgerBlue" /&gt;</code>
      <NumberProps name={9} color="DodgerBlue" />

      <hr></hr>
      <h3>프로퍼티의 자료형 지정</h3>
      <code>&lt;PropsType name="홍길동" color="Orange" /&gt;</code>
      <PropsType name="홍길동" color="Orange" />

      <hr></hr>
      <h3>프로퍼티의 기본값 지정</h3>
      <code>&lt;DefaultProps color="SpringGreen" /&gt;</code>
      <DefaultProps color="SpringGreen" />

      <hr></hr>
      <h3>프로퍼티의 필수값 설정</h3>
      <code>&lt;RequiredProps name="홍길동" color="Teal"/&gt;</code>
      <RequiredProps name="홍길동" color="Teal" />

      <hr></hr>
      <h3>불리언 프로퍼티</h3>
      <code>&lt;BooleanProps name="홍길동" color="red" maleYn /&gt;</code>
      <BooleanProps name="홍길동" color="red" maleYn />
    </div>
  );
}

export default PropsWorld;
