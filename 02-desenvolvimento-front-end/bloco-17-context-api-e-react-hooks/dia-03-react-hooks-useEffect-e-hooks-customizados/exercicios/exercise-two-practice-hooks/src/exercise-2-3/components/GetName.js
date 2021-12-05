import React, { useContext } from 'react';
import { Context } from '../context';

function GetName() {
  const { name, setName } = useContext(Context);
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

export default GetName;