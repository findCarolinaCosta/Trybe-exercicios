// Para fixar
// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 🦜 Dica: Uma possibilidade é você definir três chaves, uma para cada botão!

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleBtnOne = this.handleBtnOne.bind(this);
    this.handleBtnTwo = this.handleBtnTwo.bind(this);
    this.handleBtnThree = this.handleBtnTwo.bind(this);

    this.state = {
      handleBtnOne: 0,
      handleBtnTwo: 0,
      handleBtnThree: 0,

    }
  }

  handleBtnOne() {
    console.log('Clicou no botão 1!')
  }

  handleBtnTwo() {
    console.log('Clicou no botão 2!')
  }

  handleBtnThree() {
    console.log('Clicou no botão 3!')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleBtnOne}>Meu botão 1</button>
        <button onClick={this.handleBtnTwo}>Meu botão 2</button>
        <button onClick={this.handleBtnThree}>Meu botão 3</button>
      </div>
    );
  }
}

export default App;
