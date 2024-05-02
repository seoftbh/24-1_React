import { createElement } from "react";

function Greeting({ name }) {
  return createElement(
    "h1",
    { className: "greeting" },
    "Hello ",
    createElement("i", null, name),
    ". Welcome!"
  );
}

export default function Greeting1() {
  return createElement(Greeting, { name: "Taylor" });
}
