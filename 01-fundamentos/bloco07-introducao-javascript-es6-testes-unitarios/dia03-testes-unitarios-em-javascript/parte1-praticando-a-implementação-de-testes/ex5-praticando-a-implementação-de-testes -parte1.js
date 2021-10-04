const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

assert.deepStrictEqual(obj1, obj2, 'Error: Obj1 não é identico ao obj2');
assert.deepStrictEqual(obj1, obj3, 'Error: Obj1 não é identico ao obj3'); //não continua após esse primeiro erro.
assert.deepStrictEqual(obj2, obj3, 'Error: Obj2 não é identico ao obj3');
