const Redux = require('redux');

const reducer = (state) => {
  return state;
};

const store = Redux.createStore(reducer);


//Uma store só funciona se passarmos uma função que será responsável por alterar os dados dela: o reducer . O reducer recebe como primeiro parâmetro um state, sendo que seu retorno substituirá o state da store . Para fins didáticos, iremos montar o reducer no mesmo arquivo, mas a boa prática é fazer em um arquivo separado.