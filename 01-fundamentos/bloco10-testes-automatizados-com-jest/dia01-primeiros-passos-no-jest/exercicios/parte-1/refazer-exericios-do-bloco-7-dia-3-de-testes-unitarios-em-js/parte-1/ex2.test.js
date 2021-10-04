const myRemove = require("./ex2");
const myListTest3 = [5, 6, 7, 8];
myRemove(myListTest3, 5);

describe('Testa função myRemove', () => {
  test('1 - se retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test('2 - se não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain([1, 2, 3, 4]);
  });
  test('3 - verifica se o array passado por parâmetro não sofreu alterações', () => {
    expect(myListTest3).toEqual([5, 6, 7, 8]);
  });
  test('4 - se retorna realmente a cópia do array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});