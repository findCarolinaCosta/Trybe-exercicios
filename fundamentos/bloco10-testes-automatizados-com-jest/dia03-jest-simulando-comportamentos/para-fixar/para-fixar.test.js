const math = require('./mockando-modulos/math');

describe('', () => {
  it('1. Faça o mock da funcão subtrair e teste sua chamada.', () => {
    math.subtrair = jest.fn();
    math.subtrair();
    expect(math.subtrair).toHaveBeenCalled();
  });

  it('2. Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
    math.multiplicar = jest.fn().mockReturnValue(10);

    math.multiplicar();
    expect(math.multiplicar).toHaveBeenCalled();
    expect(math.multiplicar()).toBe(10);
  });

  it('3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', async () => {
    const mockSomar = jest.spyOn(math, "somar");
    mockSomar.mockResolvedValue(5);

    mockSomar(2, 3);
    expect(mockSomar).toHaveBeenCalled();
    expect(mockSomar).toHaveBeenCalledTimes(1);
    expect(mockSomar).toHaveBeenCalledWith(2, 3);
    await expect(mockSomar(2, 3)).resolves.toBe(5);
  });

  it('4. Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {

  });

  it('5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {

  });
});