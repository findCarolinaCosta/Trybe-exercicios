const service = require("./ex4");

describe('5. Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função. Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.', () => {

  describe('Testa função de string em caixa alta', () => {
    const first = jest
      .spyOn(service, "firstFunction")
      .mockImplementation(a => a.toLowerCase());

    it('Testa se retorna o que é esperado', () => {
      expect(first("UPPERCASE")).toBe("uppercase");
    });

    it('Testa se a função é chamada', () => {
      expect(first).toHaveBeenCalled();
    });
    it('Testa vezes que foi chamada', () => {
      expect(first).toHaveBeenCalledTimes(1);
    });

    it('Testa se recebe o parâmetro esperado', () => {
      expect(first).toHaveBeenCalledWith("UPPERCASE");
    });

    it('Testa se retorna o que é esperado', () => {
      service.firstFunction.mockRestore(); //restaure a implementação original
      expect(service.firstFunction("lowercase")).toBe("LOWERCASE");
    });
  });
});