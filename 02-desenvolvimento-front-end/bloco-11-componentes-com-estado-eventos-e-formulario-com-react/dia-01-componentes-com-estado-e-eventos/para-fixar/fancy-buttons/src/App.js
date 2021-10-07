// Para fixar
//7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!

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
    }));
  }

  handleBtnTwo() {
    this.setState((previousState, _props) => ({
      handleBtnTwo: previousState.handleBtnTwo + 1,
    }));
  }

  handleBtnThree() {
    this.setState((previousState, _props) => ({
      handleBtnThree: previousState.handleBtnThree + 1,
    }));
  }

  render() {
    return (
      <div className='div-btn'>
        <button className='btn' onClick={this.handleBtnOne}>Vezes o botão 1 foi clicado: {this.state.handleBtnOne}</button>
        <br />
        <button className='btn' onClick={this.handleBtnTwo}>Vezes o botão 2 foi clicado: {this.state.handleBtnTwo}</button>
        <br />
        <button className='btn' onClick={this.handleBtnThree}>Vezes o botão 3 foi clicado: {this.state.handleBtnThree}</button>
      </div >
    );
  }
}

export default App;
