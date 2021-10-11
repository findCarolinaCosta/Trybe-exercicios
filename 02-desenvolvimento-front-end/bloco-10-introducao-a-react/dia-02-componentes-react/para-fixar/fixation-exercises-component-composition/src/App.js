// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './components/Order';

class App extends React.Component {
  render() {
    const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

    const energyDrink = {
      id: 77,
      user: "cena@gmail.com",
      product: "Monster 500mL",
      price: {
        value: 9.99,
        currency: "dollars"
      }
    };

    return (
      <div className="App">
        <h1> Orders recently created </h1>
        <Order order={headphone} />
        <Order order={energyDrink} />
        <p>
          1. O que o componente App é em relação a Order ?<br />
          É o pai responsavel por renderizar os componentes filhos.<br />
        </p>
        <p>
          2. Complete o código acima de forma que os pedidos referentes aos produtos headphone e energyDrink sejam filhos de App <br />
          ** Linha 30 e 31 <span style={{ fontSize: '30px', fontWeight: 'bold' }}>&#10003;</span>
        </p>
      </div >
    );
  }
}

export default App;