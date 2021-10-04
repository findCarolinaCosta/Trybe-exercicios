const assert = require('assert');

const wordLengths = (arrays) => {
  const result = [];
  for (let index = 0; index < arrays.length; index += 1) {
    result.push(arrays[index].length);
  }
  return result;
}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);
