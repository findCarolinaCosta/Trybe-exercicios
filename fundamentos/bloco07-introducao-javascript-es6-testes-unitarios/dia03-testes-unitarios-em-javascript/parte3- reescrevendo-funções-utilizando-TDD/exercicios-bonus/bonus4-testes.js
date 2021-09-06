//Use a variável parameter como parâmetro da função abaixo, escreva testes para verificar se a mesma está retornando como se vê na variável result e, caso não esteja, altere o código para que ele passe nos testes.
//Lembre-se: testes pequenos e numerosos! Escreva um por vez e vá corrigindo a função aos poucos.
const getLargestNumber = require('./bonus4-get-largest-number');
const assert = require('assert');

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;
const output = getLargestNumber(parameter);
const unchangedArray = [45, 8, 2, 50, 99, 1, 7];

assert.strictEqual(output, result);
assert.deepStrictEqual(parameter, unchangedArray);