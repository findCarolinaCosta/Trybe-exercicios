const service = require('./service');

describe('1 - Testa função que gera um número aleatório', () => {
  test('Testa se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
     //Utilize o mock e defina o retorno padrão como 10.
    service.handleNumber = jest.fn().mockReturnValue(10);

    expect(service.handleNumber()).toBe(10);
  });

})