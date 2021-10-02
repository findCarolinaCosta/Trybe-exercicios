const service = require('./ex1');

describe('3. Ainda com a mesma função do primeiro exercício, utilizando o mock, crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro. Faça os testes necessários.', () => {
  describe('Teste que se ao criar uma nova implementação que receba três parâmetros retorna sua multiplicação', () => {
    service.retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);
    it('Testa se multiplica os parâmetros como esperado', () => {
      expect(service.retornaNumeroAleatorio(2, 3, 4)).toBe(24);
    });

    it('Testa se a função é chamada', () => {
      expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
    });

    it('Testa vezes que foi chamada', () => {
      expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    });

    it('Testa se recebe os parâmetros esperados', () => {
      expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(2, 3, 4);
    });

  })
});