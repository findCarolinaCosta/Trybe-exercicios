import React, { useState } from 'react';

function Greeting() {
  const [name, setame] = useState('')

  function handleChange(event) {
    setame(event.target.value)
  }

  return (
    <div>
      <h1>Exercício 2.1:</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

export default Greeting;
