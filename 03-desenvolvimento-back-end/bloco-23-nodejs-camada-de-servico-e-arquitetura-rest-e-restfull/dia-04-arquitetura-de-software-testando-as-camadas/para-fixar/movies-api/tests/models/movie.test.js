const { expect } = require("chai");

const MovieModel = require("../../models/movie");

describe("Insere um novo filme no BD", () => {
  const payloadMovie = {
    title: "Example Movie",
    directedBy: "Jane Dow",
    releaseYear: 1999,
  };

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
