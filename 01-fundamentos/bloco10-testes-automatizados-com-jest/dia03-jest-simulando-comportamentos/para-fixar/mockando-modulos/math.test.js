const math = require('./math');
jest.mock("./math"); // com jest.mock para simular o comportamento de todas as funções

test("#somar", () => {
  // Aqui testamos se função foi chamada, quantas vezes foi chamada, quais parâmetros foram usados e qual seu retorno

  math.somar.mockImplementation((a, b) => a + b); //constrole adição
  math.somar(1, 2);

  expect(math.somar).toHaveBeenCalled();
  expect(math.somar).toHaveBeenCalledTimes(1);
  expect(math.somar).toHaveBeenCalledWith(1, 2);
  expect(math.somar(1, 2)).toBe(3);


  math.subtrair.mockImplementation((a, b) => a - b); //controle subtração
  math.subtrair(3, 2);
  expect(math.subtrair).toHaveBeenCalled();
  expect(math.subtrair).toHaveBeenCalledTimes(1);
  expect(math.subtrair).toHaveBeenCalledWith(3, 2);
  expect(math.subtrair(3, 2)).toBe(1);
});

// pode-se ter o controle e assim "modificar" para agir como é esperado, e com jest.mock(linha 2) e obtendo o controle com .mockImplementation por exemplo se tem uma simulação do resultado.