const { expect } = require("chai");

const writeFile = require("./writeFile");

describe("Testa função writeFile", () => {
  describe("Testa retorno esperado", () => {
    it("resposta é uma string", () => {
      const answer = writeFile("arquivo.txt", "Conteúdo do arquivo de texto");

      expect(answer).to.be.a("string");
    });

    it('resposta é igual a "ok"', () => {
      const answer = writeFile("arquivo.txt", "Conteúdo do arquivo de texto");

      expect(answer).to.be.equals("ok");
    });
  });
});
