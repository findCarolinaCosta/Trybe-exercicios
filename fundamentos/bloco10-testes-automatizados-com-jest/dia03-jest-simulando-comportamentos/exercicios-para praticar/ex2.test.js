const service = require('./ex1');

describe('2. Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.', () => {
  service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
  it('Testa se retorno é o esperado', () => {
    expect(service.retornaNumeroAleatorio(10, 2)).toBe(5);
  });

  it('Testa se a função é chamada', () => {
    expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  });

  it('Testa vezes que foi chamada', () => {
    expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
  });

  it('Testa se recebe dois parâmetros', () => {
    expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(10, 2);
  });

});
