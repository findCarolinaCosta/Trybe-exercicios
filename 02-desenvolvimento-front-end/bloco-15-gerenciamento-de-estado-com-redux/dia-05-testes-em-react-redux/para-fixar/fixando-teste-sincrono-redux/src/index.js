import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Store da aplicação transferido para index. Para que nos testes, seja prover um novo store para podermos controlá-lo envolvendo ao App.
// Logo quando renderizar o componente <App /> nos testes nós não renderizamos o store da aplicação, que está fora desse componente. Assim ficamos livres para criar um novo store que podemos controlar no ambiente de testes!

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
