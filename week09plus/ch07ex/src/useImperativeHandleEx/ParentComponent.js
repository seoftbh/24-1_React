import { useEffect, useRef, forwardRef } from "react";
import ChildComponent from "./ChildComponent";
const ForwardedChild = forwardRef(ChildComponent);
function ParentComponent() {
  const childRef = useRef(null);
  useEffect(() => {
    console.log(childRef.current?.getText()); // 'useImperativeHandle 테스트'
  }, []);
  return (
    <div>
      <h3>부모 컴포넌트에게 커스텀 함수 노출하기</h3>
      <ForwardedChild ref={childRef} />
    </div>
  );
}
export default ParentComponent;
