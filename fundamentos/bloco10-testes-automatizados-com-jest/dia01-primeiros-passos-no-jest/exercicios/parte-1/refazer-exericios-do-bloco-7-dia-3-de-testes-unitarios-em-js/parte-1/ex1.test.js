const sum = require("./ex1");
const assert = require('assert');

describe('Test adding function', () => {
  test('Test whether the sum works as expected', () => {
    assert.strictEqual(sum(4, 5), 9);
    assert.strictEqual(sum(0, 0), 0);
  });
  test('Test whether the sum function throws an error', () => {
    assert.throws(() => sum(4, '5'));
    assert.throws(() => sum(4, '5'), 'Error: parameters must be numbers');
  });
});