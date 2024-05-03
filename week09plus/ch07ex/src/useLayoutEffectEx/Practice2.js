import { useLayoutEffect, useState } from "react";
const Practice2 = () => {
  const [logoUrl, setLogoUrl] = useState("");
  useLayoutEffect(() => {
    setLogoUrl("logo192.png");
  }, []);
  return (
    <>
      <h3>useLayoutEffect를 사용</h3>
      <img alt="test" src={logoUrl} />
    </>
  );
};
export default Practice2;
