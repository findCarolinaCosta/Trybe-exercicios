const assert = require('assert');
const addOne = (arrays) => {
  const result = [];
  for (let index = 0; index < arrays.length; index += 1) {
    result.push(arrays[index] + 1);
  }
  return result;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged)
