const uppercase = require('./ex1');

describe('1. - Escreva um teste que verifique a chamada do callback de uma função uppercase , que transforma as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.', () => {
  it('Testa se retorna o esperado', (done) => {
    uppercase('test', (string) => {
      try {
        expect(string).toBe('TEST');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});