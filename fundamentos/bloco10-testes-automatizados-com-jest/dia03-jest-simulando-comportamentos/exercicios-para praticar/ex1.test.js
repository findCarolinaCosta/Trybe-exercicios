const service = require('./ex1');

describe('1. Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  describe('Testa função de gerar números aleatórios', () => {
    service.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
    it('Testa retorno', () => {
      expect(service.retornaNumeroAleatorio()).toBe(10);
    });

    it('Testa se a função é chamada', () => {
      expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
    });

    it('Testa vezes que foi chamada', () => {
      expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    });
  });
});