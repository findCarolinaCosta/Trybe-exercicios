import React from 'react';

function Greeting() {
  // substitua essa variável por uma variável no estado, utilizando useState
  const name = '';

  function handleChange(event) {
    // atualize o valor do estado com base no que está em event.target.value
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
