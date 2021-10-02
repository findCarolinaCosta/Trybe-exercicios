const service = require("./ex4");
jest.mock("./ex4");

describe('4. Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra de uma string. A terceira deve receber três strings e concatená-las.', () => {
  describe('Testa função de string em caixa alta', () => {
    service.firstFunction.mockImplementation(a => a.toLowerCase());

    it('Testa se retorna o que é esperado', () => {
      expect(service.firstFunction("UPPERCASE")).toBe("uppercase");
    });

    it('Testa se a função é chamada', () => {
      expect(service.firstFunction).toHaveBeenCalled();
    });
    it('Testa vezes que foi chamada', () => {
      expect(service.firstFunction).toHaveBeenCalledTimes(1);
    });

    it('Testa se recebe o parâmetro esperado', () => {
      expect(service.firstFunction).toHaveBeenCalledWith("UPPERCASE");
    });

  });

  describe('Testa função de retornar a primeira letra de uma string', () => {
    service.secondFunction.mockImplementation(a => a.charAt(a.length - 1));
    it('Testa se retorna o que é esperado', () => {
      expect(service.secondFunction("letter")).toBe("r");
    });

    it('Testa se a função é chamada', () => {
      expect(service.secondFunction).toHaveBeenCalled();
    });

    it('Testa vezes que foi chamada', () => {
      expect(service.secondFunction).toHaveBeenCalledTimes(1);
    });

    it('Testa se recebe o parâmetro esperado', () => {
      expect(service.secondFunction).toHaveBeenCalledWith("letter");
    });

  });

  describe('Testa função que recebe duas strings e ás concatena', () => {
    service.thirdFunction.mockImplementation((a, b, c) => a.concat(b, c));
    it('Testa se retorna o que é esperado', () => {
      expect(service.thirdFunction("a", "m", "or")).toBe("amor");
    });

    it('Testa se a função é chamada', () => {
      expect(service.thirdFunction).toHaveBeenCalled();
    });

    it('Testa vezes que foi chamada', () => {
      expect(service.thirdFunction).toHaveBeenCalledTimes(1);
    });

    it('Testa se recebe o parâmetro esperado', () => {
      expect(service.thirdFunction).toHaveBeenCalledWith("a", "m", "or");
    });

  });

});