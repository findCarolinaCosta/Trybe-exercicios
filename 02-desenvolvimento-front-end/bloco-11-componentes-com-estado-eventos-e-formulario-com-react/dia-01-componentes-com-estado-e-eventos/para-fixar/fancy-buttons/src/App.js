// Para fixar
// 3 - Declare dentro da classe do seu componente dos exercícios de fixação acima a função que lida com o evento que antes era lidado por uma função do lado de fora da classe!
//Não são reconhecidas ainda

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  function handleBtnOne() {
  console.log('Clicou no botão 1!')
}

function handleBtnTwo() {
  console.log('Clicou no botão 2!')
}

function handleBtnThree() {
  console.log('Clicou no botão 3!')
}

render() {
  return (
    <div>
      <button onClick={handleBtnOne}>Meu botão 1</button>
      <button onClick={handleBtnTwo}>Meu botão 2</button>
      <button onClick={handleBtnThree}>Meu botão 3</button>
    </div>
  );
}
}

export default App;
