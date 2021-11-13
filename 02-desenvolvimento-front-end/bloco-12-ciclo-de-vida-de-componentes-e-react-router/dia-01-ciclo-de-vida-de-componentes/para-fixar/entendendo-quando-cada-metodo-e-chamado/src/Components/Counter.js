import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    console.log("construtor");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    return (
      <div>
        <p>Contador</p>
        <button
          onClick={() => this.setState((state) => ({ counter: state.counter + 1 }))}
        >
          Soma
        </button>
        <p>{this.state.counter}</p>
      </div>
    );
  }
}

export default Counter;


//Assim que a tela carrega: Os métodos shouldComponentUpdate e componentDidUpdate não apareceram no console, pois não houve atualização.
/* 
outputs em ordem
construtor
render
componentDidMount
 */

// Quando clica no botão:  o método render é chamado novamente. Isso acontece porque, quando se atualiza uma props ou estado, o React "pede" que o componente seja renderizado no DOM. Como apresentamos acima, caso seja válido, podemos impedir essa renderização retornando false com o método shouldComponentUpdate .
/* 
outputs em ordem ao clicar no botão
shouldComponentUpdate {counter: 0} estado atual {counter: 1} próximo estado
render
componentDidUpdate {counter: 1} estado atual {counter: 0} estado anterior
 */
