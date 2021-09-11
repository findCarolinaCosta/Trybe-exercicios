//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
]

const checkQuantity = (acc, curr) => acc + curr.split('').reduce((acumulator, current) => {
  const condition = current === 'a' || current === 'A' ? acumulator + 1 : acumulator;
  return condition;
}, 0)

function containsA() {
  return names.reduce((acc, curr) =>
    checkQuantity(acc, curr), 0);
}

assert.deepStrictEqual(containsA(), 20);