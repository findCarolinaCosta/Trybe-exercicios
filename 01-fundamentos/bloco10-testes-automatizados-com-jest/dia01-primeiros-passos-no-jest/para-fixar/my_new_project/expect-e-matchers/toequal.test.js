test('array and object equality', () => {
  const arr = [1, 2, 3];
  const obj = { a: 1, b: 2, c: 3 };

  expect(arr).toBe([1, 2, 3]); // fails
  expect(obj).toBe({ a: 1, b: 2, c: 3 }); // fails
  expect(arr).toEqual([1, 2, 3]); // OK
  expect(obj).toEqual({ a: 1, b: 2, c: 3 }); // OK
});

//Para testar igualdade de objetos e arrays, é preciso usar o matcher toEqual , que acessa cada elemento do objeto ou array, fazendo um trabalho de comparação específico e que retorna uma resposta mais voltada para a necessidade dos testes