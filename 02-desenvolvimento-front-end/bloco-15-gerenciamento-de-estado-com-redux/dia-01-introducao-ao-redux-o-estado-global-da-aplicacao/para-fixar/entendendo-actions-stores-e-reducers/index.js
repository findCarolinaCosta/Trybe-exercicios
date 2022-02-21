const Redux = require('redux');

const fazerLogin = (email, password) => ({
  type: "LOGIN",
  email,
  password,
});

const ESTADO_INICIAL = {
  login: false,
  email: '',
  password: '',
};


const reducer = (state = ESTADO_INICIAL, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        login: !state.login,
        email: action.email,
        password: action.password,
      }
    default: // No switch, sempre precisamos ter um caso default!
      return state;
  }
};

const store = Redux.createStore(reducer);
store.dispatch(fazerLogin('alguem@email.com', '12345678'));

console.log(store.getState()); // output atual: { login: true, email: 'alguem@email.com', password: '12345678' }


//Conseguimos mudar o estado da store utilizando o dispatch . Ele despacha nossa action para dentro do reducer , para que nosso estado seja alterado. Note, também, que o reducer retorna todo o estado , e não somente o que será modificado. Retornamos, então, um objeto que contém todos os dados atuais do estado { ...state } mais as chaves que serão modificadas pela action!