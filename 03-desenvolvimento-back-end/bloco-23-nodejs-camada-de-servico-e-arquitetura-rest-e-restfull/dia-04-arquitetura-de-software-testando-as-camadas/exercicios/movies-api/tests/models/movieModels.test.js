const { expect } = require("chai");
const sinon = require("sinon");

const connection = require("../../models/connection");
const MovieModel = require("../../models/movies");

describe("Insere um novo filme no BD", () => {
  const payloadMovie = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, "execute").resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe("quando é inserido com sucesso", () => {
    it("retorna um objeto", async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.be.a("object");
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MovieModel.create(payloadMovie);

      expect(response).to.have.a.property("id");
    });
  });
});

describe("Busca apenas um filme no BD por seu ID", () => {
  before(async () => {
    const execute = [[], []];
    sinon.stub(connection, "execute").resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe("quando não existe um filme com o ID informado", () => {
    it("retornar null", async () => {
      const response = await MovieModel.findById();
      expect(response).to.be.equal(null);
    });
  });

  describe("quando existe um filme com ID passado", () => {
    const payloadMovie = {
      id: 1,
      title: "Example Movie",
      directedBy: "Jane Dow",
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MovieModel, "findById").resolves(payloadMovie);
    });

    after(() => {
      MovieModel.findById.restore();
    });

    it("retorna um objeto", async () => {
      const response = await MovieModel.findById(1);
      expect(response).to.be.an("object");
    });

    it("objeto não é vazio", async () => {
      const response = await MovieModel.findById(1);
      expect(response).to.be.not.empty;
    });

    it('objeto possui as chaves: "id", "title", "releaseYear" e "directedBy"', async () => {
      const response = await MovieModel.findById(1);
      expect(response).to.include.all.keys(
        "id",
        "title",
        "directedBy",
        "releaseYear"
      );
    });
  });
});
