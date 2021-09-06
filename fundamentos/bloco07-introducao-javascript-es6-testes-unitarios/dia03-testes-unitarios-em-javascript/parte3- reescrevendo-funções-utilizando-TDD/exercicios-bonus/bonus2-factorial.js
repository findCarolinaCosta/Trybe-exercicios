//Escreva a função factorial para passar nos testes já implementados.
const factorial = (int) => {
  let factorial = 1;
  for (let index = int; index > 0; index -= 1) factorial *= index;
  return factorial;
};
module.exports = factorial;