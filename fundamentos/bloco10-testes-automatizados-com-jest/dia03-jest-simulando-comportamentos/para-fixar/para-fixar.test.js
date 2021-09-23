const math = require('./mockando-modulos/math');

describe('', () => {
  it('1. Faça o mock da funcão subtrair e teste sua chamada.', () => {
    const mockSubtrair = jest.spyOn(math, "subtrair");  // para fazer da oficial
    mockSubtrair(3, 2);
    expect(mockSubtrair).toHaveBeenCalled();
    expect(mockSubtrair).toHaveBeenCalledTimes(1);
    expect(mockSubtrair).toHaveBeenCalledWith(3, 2);
    expect(mockSubtrair(3, 2)).toBe(1);
  });

  it('2. Faça o mock da função multiplicar e implemente como retorno padrão o valor "10". Teste a chamada e o retorno.', () => {
    const mockMultiplicar = jest.spyOn(math, "multiplicar");
    mockMultiplicar(2, 5);
    expect(mockMultiplicar).toHaveBeenCalled(); // se foi chamada
    expect(mockMultiplicar).toHaveBeenCalledTimes(1) // dentro desse teste
    expect(mockMultiplicar).toHaveBeenCalledWith(2, 5); // parametro passado
    expect(mockMultiplicar(2, 5)).toEqual(10);
  });

  it('3. Faça o mock da função somar e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.', () => {

  });

  it('4. Faça o mock da função dividir e implemente um retorno padrão com o valor "15". Implemente também os seguintes valores para a primeira e segunda chamadas: "2" e "5". Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.', () => {

  });

  it('5. Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor "20". Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.', () => {

  });
});