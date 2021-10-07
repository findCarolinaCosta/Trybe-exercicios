// Para fixar
//6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.handleBtnOne = this.handleBtnOne.bind(this);
    this.handleBtnTwo = this.handleBtnTwo.bind(this);
    this.handleBtnThree = this.handleBtnThree.bind(this);

    this.state = {
      handleBtnOne: 0,
      handleBtnTwo: 0,
      handleBtnThree: 0,

    }
  }

  handleBtnOne() {
    this.setState(() => ({
      handleBtnOne: 1,
    }),
      console.log('Clicou no botão 1!'));

  }

  handleBtnTwo() {
    this.setState(() => ({
      handleBtnTwo: 1,
    }),
      console.log('Clicou no botão 2!'));
  }

  handleBtnThree() {
    this.setState(() => ({
      handleBtnThree: 1,
    }),
      console.log('Clicou no botão 3!'));
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
