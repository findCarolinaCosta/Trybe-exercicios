import React, { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
        <h1>Exemplo com useState:</h1>
      <div>Counter: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase Counter
      </button>
    </div>
  );
}

export default UseState;