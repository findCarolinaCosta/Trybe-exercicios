const { expect } = require("chai");

const getNumberInfo = require("./getNumberInfo");

describe("Testa função getNumberInfo", () => {
  describe("Testa retorno positivo esperado", () => {
    it("resposta é uma string", () => {
      const answer = getNumberInfo(0);
      expect(answer).to.be.a("string");
    });

    it("numero > 0", () => {
      const answer = getNumberInfo(10);
      expect(answer).to.be.equals("positivo");
    });
  });

  describe("Testa retorno negativo esperado", () => {
    it("resposta é uma string", () => {
      const answer = getNumberInfo(0);
      expect(answer).to.be.a("string");
    });

    it("numero < 0", () => {
      const answer = getNumberInfo(-2);
      expect(answer).to.be.equals("negativo");
    });
  });

  describe("Testa retorno neutro esperado", () => {
    it("resposta é uma string", () => {
      const answer = getNumberInfo(0);
      expect(answer).to.be.a("string");
    });

    it("numero = 0", () => {
      const answer = getNumberInfo(0);
      expect(answer).to.be.equals("neutro");
    });
  });

  describe("Testa retorno esperado quando parâmetro não é typeof numero", () => {
    it("resposta é uma string", () => {
      const answer = getNumberInfo(0);
      expect(answer).to.be.a("string");
    });

    it("parâmetro !== de numero", () => {
      const answer = getNumberInfo("AAAA");
      expect(answer).to.be.equals("o parâmetro deve ser um número");
    });
  });
});
