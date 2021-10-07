// Para fixar
// 4 - Garanta acesso ao objeto this na função que você declarou.

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleBtnOne = this.handleBtnOne.bind(this);
    this.handleBtnTwo = this.handleBtnTwo.bind(this);
    this.handleBtnThree = this.handleBtnTwo.bind(this);
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
