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

  // Podemos também, nos métodos shouldComponentUpdate e componentDidUpdate , acessar os estados ou props próximos e anteriores. Para isso, devemos utilizar os parâmetros nextProps e nextState no shouldComponentUpdate e prevProps e prevState no componentDidUpdate .

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", this.state, 'estado atual', nextState, 'próximo estado');
    return true;
  }

  //o estado só é de fato atualizado quando chega no método componentDidUpdate . Por isso, caso seja necessário impedir uma renderização, você deve utilizar o método shouldComponentUpdate , que permite comparar os atuais e próximos estados ou props e adicionar a lógica. Como por exemplo uma condição

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate", this.state, 'estado atual' , prevState, 'estado anterior');
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
