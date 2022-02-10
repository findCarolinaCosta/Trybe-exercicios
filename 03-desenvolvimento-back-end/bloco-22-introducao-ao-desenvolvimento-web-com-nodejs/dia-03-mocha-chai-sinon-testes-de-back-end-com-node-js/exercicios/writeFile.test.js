const { expect } = require("chai");
const fs = require("fs");
const sinon = require("sinon");

const writeFile = require("./writeFile");

describe("Testa função writeFile", () => {
  before(() => {
    sinon.stub(fs, "writeFileSync");
  });

  after(() => {
    fs.writeFileSync.restore();
  });

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
