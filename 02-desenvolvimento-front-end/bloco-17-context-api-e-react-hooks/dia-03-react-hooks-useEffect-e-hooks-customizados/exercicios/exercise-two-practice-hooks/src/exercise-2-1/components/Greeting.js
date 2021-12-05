import React, { useEffect, useState } from 'react';

const INITIAL_NAME = '';

function Greeting() {
  const gettingName = window.localStorage.getItem('Name') || INITIAL_NAME;
  const [name, setame] = useState(gettingName);

  useEffect(() => {
   window.localStorage.setItem('Name', name);
  }, [name]);

  function handleChange(event) {
    setame(event.target.value)
  }

  return (
    <div>
      <h1>Exercício 2.1 e 2.2: praticando hooks</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  );
}

export default Greeting;
