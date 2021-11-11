const Redux = require('redux');

const ESTADO_INICIAL = {
  login: false,
  email: '',
  password: '',
};


const reducer = (state = ESTADO_INICIAL) => {
  return state;
};

const store = Redux.createStore(reducer);

console.log(store.getState()); //{ login: false, email: '', password: '' }


// Nosso reducer está montado e possui o nosso estado inicial da aplicação. Vamos verificar o output quando acessamos a store com a função getState() .