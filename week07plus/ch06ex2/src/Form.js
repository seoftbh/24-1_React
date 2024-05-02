import { useState } from "react";

function Form() {
  const [name, setName] = useState("Taylor");
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}

export default Form;
