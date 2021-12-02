import React, { useContext } from 'react';
import AppContext from './AppContext';

const UseContext = () => {
  const { stateA, setStateA, stateB, setStateB } = useContext(AppContext);

  return (
    <div>
      <p>{stateA}</p>
      <p>{stateB}</p>
      <button onClick={() => { setStateA("newState for A");  return setStateB("newState for B") }}>Click</button>
    </div>
  );
};

export default UseContext;