const sum = require("./ex1");

describe('Test adding function', () => {
  test('Test whether the sum works as expected', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  test('Test whether the sum function throws an error', () => {
    expect(() => sum(4, '5')).toThrow();
    expect(() => sum(4, '5')).toThrowError(new Error('parameters must be numbers'));
  });
});