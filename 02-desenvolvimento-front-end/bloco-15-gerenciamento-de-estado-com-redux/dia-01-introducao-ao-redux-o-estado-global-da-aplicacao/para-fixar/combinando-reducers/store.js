const { createStore } = require('redux')
// Importando o reducer combinado que fizemos logo acima
const reducerCombinado = require('.');

const store = createStore(reducerCombinado);

console.log(store.getState());

//output: {
//   meuReducer: { primeiroreducer: true },
//   meuOutroReducer: { segundoreducer: true }
// }
