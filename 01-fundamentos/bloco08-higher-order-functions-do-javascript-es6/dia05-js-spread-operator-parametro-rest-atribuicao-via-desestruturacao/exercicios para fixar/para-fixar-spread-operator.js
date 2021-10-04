// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Banana', 'Goiaba'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Aveia', 'Manteiga de Amendoim', 'Limão'];

const fruitSalad = (fruit, additional) => {
  const readySalad = [...fruit, ...additional];
  return readySalad;
};

console.log(fruitSalad(specialFruit, additionalItens));