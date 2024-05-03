import { useEffect, useState } from "react";
const Practice = () => {
  const [logoUrl, setLogoUrl] = useState("");
  useEffect(() => {
    setLogoUrl("logo192.png");
  }, []);
  return (
    <>
      <h3>useEffect를 사용</h3>
      <img alt="test" src={logoUrl} />
    </>
  );
};
export default Practice;
