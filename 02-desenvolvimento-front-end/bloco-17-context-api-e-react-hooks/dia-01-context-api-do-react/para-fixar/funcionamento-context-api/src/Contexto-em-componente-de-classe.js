import React, { Component, createContext } from 'react';
const MyContext = createContext();

class MyComponent extends Component {
  componentDidMount() {
    const value = this.context; //acessar um único valor de um contexto através de this.context
    return value; //exemplo pode ser usado em uma função ou lifecycle method
  }

  render() {
    const value = this.context; //acessar um único valor de um contexto através de this.context no render
    return <p>Exemplo acessando um único valor de um contexto através de this.context = {value}</p>
  }
}

MyComponent.contextType = MyContext;

/*
Em ambos componentes (funções ou classes), se pode utilizar um consumer para acessar o contexto.

Em componentes de classe, também é possível utilizar a propriedade contextType .
contextType é uma propriedade disponível em qualquer componente de classe, e seu único propósito é fazer com que seja possível acessar o valor de um contexto através de this.context, sem a necessidade de utilizar um consumer, em qualquer lifecycle method do componente, incluindo a função render .

Somente um contexto pode ser atribuído a contextType . Caso um componente de classe precise acessar mais de um contexto, será necessário utilizar um consumer
*/