import React from 'react';

class App extends React.Component {
  render() {
    const shoppingList = ['leite', 'arroz', 'feijão', 'banana', 'carne'];
    const items = shoppingList.map((item) => {
      console.log("item: ", item);
      return (<li key={item}>{item}</li>); //keys são importantes para o React indentificar, com precisão, quais itens foram adicionados, removidos ou alterados. Sendo mais recomendado usar nome ou um id e não index do array nesse exemplo.
    });

    return (
      <div className="App">
        <h1> Como você renderizaria dinamicamente essa lista de compras?</h1>
        <h2>Lista de compras</h2>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default App;
