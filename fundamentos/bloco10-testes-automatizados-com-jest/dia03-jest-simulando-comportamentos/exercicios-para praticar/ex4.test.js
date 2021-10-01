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

});