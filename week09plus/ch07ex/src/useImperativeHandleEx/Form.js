import { useRef, forwardRef } from "react";
import MyInput from "./MyInput";
const ForwardedMyInput = forwardRef(MyInput);
function Form() {
  const ref = useRef(null);
  function handleClick() {
    // useImperativeHandle에서 focus만 노출시키고 있다.
    // ref.current에서 input 관련 다른 변수나 함수 접근 시도 시 에러 발생한다.
    ref.current.focus();
  }
  return (
    <form>
      <h3>부모 컴포넌트에게 커스텀 함수 노출하기 2</h3>
      <ForwardedMyInput ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}
export default Form;
