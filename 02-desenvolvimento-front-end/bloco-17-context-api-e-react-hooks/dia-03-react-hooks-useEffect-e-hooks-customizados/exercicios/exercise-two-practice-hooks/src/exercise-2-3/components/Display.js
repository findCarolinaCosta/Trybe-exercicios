import React, { useContext } from 'react';
import { Context } from '../context';

function Display() {
  const { name, animal } = useContext(Context);
  return (
    <div>
      <p>{`Hey ${name}, you are great!`}</p>
      <p>{`Your favorite animal is: ${animal}`}</p>
    </div>
  );
}

export default Display;
