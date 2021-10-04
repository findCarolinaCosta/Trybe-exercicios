const assert = require('assert');

const sumAllNumbers = (arrays) => {
  let result = 0;
  for (const index in arrays) {
    result += arrays[index];
  }
  return result;
}

const numbers = [9, 23, 10, 3, 8];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);
