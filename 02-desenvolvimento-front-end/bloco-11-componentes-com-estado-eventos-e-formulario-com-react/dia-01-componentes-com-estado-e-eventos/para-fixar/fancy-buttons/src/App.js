// Para fixar
// 8 - Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser uma cor diferente.
// purple para par e black para impar

//9 - A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!
// 🦜 Dica: Lembre-se de substituir a referência à função, no evento, por uma callback que invoca!

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
    this.setState((previousState, _props) => ({
      handleBtnOne: previousState.handleBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getBtnColor(this.state.handleBtnOne)}`);
    });
  }

  handleBtnTwo() {
    this.setState((previousState, _props) => ({
      handleBtnTwo: previousState.handleBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${this.getBtnColor(this.state.handleBtnTwo)}`);
    });
  }

  handleBtnThree() {
    this.setState((previousState, _props) => ({
      handleBtnThree: previousState.handleBtnThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.getBtnColor(this.state.handleBtnThree)}`);
    });
  }

  getBtnColor(num) {
    return num % 2 === 0 ? 'purple' : 'black';
  }

  render() {
    const { handleBtnOne, handleBtnTwo, handleBtnThree } = this.state;
    return (
      <div className='div-btn'>
        <button className='btn' onClick={this.handleBtnOne} style={{ background: this.getBtnColor(handleBtnOne) }}>Vezes o botão 1 foi clicado: {this.state.handleBtnOne}</button>
        <br />
        <button className='btn' onClick={this.handleBtnTwo} style={{ background: this.getBtnColor(handleBtnTwo) }}>Vezes o botão 2 foi clicado: {this.state.handleBtnTwo}</button>
        <br />
        <button className='btn' onClick={this.handleBtnThree} style={{ background: this.getBtnColor(handleBtnThree) }}>Vezes o botão 3 foi clicado: {this.state.handleBtnThree}</button>
      </div >
    );
  }
}

export default App;
