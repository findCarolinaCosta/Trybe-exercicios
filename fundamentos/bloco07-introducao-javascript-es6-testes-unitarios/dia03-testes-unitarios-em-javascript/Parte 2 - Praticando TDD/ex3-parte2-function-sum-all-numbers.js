const assert = require('assert');
// escreva a função sumAllNumbers aqui
// 3 - Escreva a função sumAllNumbers para passar nos testes já implementados.

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
