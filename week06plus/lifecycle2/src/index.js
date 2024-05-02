import React from "react";
import ReactDOM from "react-dom/client";
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hello: "World!" };
  }
  componentDidMount() {
    console.log("componentDidMount()");
  }
  changeState() {
    this.setState({ hello: "React!" });
  }
  render() {
    return (
      <div>
        <h1>
          Hello
          {this.state.hello}
        </h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Click Here!</a>
        </h2>
      </div>
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate()");
    return true;
  }
  componentDidUpdate() {
    console.log("componentDidUpdate()");
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
