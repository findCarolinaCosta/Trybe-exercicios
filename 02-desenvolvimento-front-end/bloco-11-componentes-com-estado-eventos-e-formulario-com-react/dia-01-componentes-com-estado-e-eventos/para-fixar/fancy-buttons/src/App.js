// Para fixar
// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .

import React, { Component } from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */

function handleBtnOne() {
  console.log('Clicou no botão 1!')
}

function handleBtnTwo() {
  console.log('Clicou no botão 2!')
}

function handleBtnThree() {
  console.log('Clicou no botão 3!')
}

class App extends Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */
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
