import React, { Component } from 'react';

const FamilyContext = React.createContext();

class GreatGrandfather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inheritance: 1000000,
    }
    this.spendInheritance = this.spendInheritance.bind(this);
  }

  spendInheritance() {
    this.setState((prevState) => ({ inheritance: prevState.inheritance - 1000 }));
  }

  render() {
    const contextValue = {
      inheritance: this.state.inheritance,
      spendInheritance: this.spendInheritance
    };

    return (
      <>
        <h1>Exemplo 2:</h1>
        <FamilyContext.Provider value={contextValue}>
          <Grandmother />
        </FamilyContext.Provider>
      </>
    );
  }
}

function Grandmother(props) {
  return <Father />;
}

function Father(props) {
  return <Daughter />;
}

function Daughter() { //Um componente consumer deve receber como children uma função
  return (
    <FamilyContext.Consumer>
      {/*Essa função recebe como parâmetro o valor passado na prop value do Provider, sendo value podendo ser qualquer nome.
      Quando um componente recebe um valor, ele deve ser interpolado dentro de chaves {}
      - Esse é um pattern em React conhecido como render props */}
      {({ inheritance, spendInheritance }) => (
        <div>
          {/*retornando algo a ser renderizado baseado no parâmetro*/}
          <h2>
            Tenho uma herança de R$ ${inheritance} que recebi do meu bisavô
          </h2>
          <button type="button" onClick={spendInheritance}>
            Gastar Herança!
          </button>
        </div>
      )}
    </FamilyContext.Consumer>
  );
}
//Father e Daughter não recebem props. Daughter acessa o estado diretamente, utilizando um Consumer . Sem mais prop drilling !

export default GreatGrandfather;