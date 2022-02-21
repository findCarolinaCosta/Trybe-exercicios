// Como poderíamos unir vários reducers numa aplicação que, normalmente, possui apenas um store ?
// O Redux já possui uma função para resolver isso, a combineReducers() . Essa função recebe um objeto como parâmetro contendo cada um dos seus reducers como elementos


const { combineReducers } = require('redux');
const meuReducer = require('./meuReducer');
const meuOutroReducer = require('./meuOutroReducer');

const reducerCombinado = combineReducers({
  meuReducer,
  meuOutroReducer
});

module.exports = reducerCombinado;