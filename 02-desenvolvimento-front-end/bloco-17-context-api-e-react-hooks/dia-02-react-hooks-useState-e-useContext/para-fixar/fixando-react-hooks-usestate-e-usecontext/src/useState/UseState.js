
import React, { Component } from "react";

class UseState extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  render() {
    const { counter } = this.state

    return (
      <div>
        <h1>Exemplo com useState:</h1>
        <div>Counter: {counter}</div>
        <button
          type="button"
          onClick={() =>
            this.setState((prevState) => ({ counter: prevState.counter + 1 }))
          }
        >
          Increase Counter
        </button>
      </div>
    );
  }
}

export default UseState;