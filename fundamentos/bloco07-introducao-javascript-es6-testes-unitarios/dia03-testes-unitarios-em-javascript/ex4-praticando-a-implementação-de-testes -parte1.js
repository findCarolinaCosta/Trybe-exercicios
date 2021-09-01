const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}
// 1
assert.strictEqual(myFizzBuzz(30), 'fizzbuzz', 'Erro: chamada com um número divisível por 3 e 5, retorno não esperado!');

//2
assert.strictEqual(myFizzBuzz(12), 'fizz', 'Erro: chamada com um número divisível por 3, retorno não esperado!');

//3
assert.strictEqual(myFizzBuzz(10), 'buzz', 'Erro: chamada com um número divisível por 5, retorno não esperado!');

//4
assert.strictEqual(myFizzBuzz(13), 13, 'Erro: chamada com um número divisível por 3 ou 5, retorno não esperado!');

//5
assert.strictEqual(myFizzBuzz('Isso não é um número'), false, 'Erro: o que foi informado é um número, logo essa afirmação é falsa!');
