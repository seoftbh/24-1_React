function Greeting({ name }) {
  return (
    <h1 className="greeting">
      Hello <i>{name}</i>. Welcome!
    </h1>
  );
}
export default function Greeting2() {
  return <Greeting name="Taylor" />;
}
