const request = require('./ex6');

describe('6. Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor "request sucess". O segundo deve interpretar que a requisição falhou e ter como valor "request failed". Crie todos os testes que achar necessário.', () => {
  describe("Testa a requisição", () => {
    request.fetchDogApi = jest.fn();
    afterEach(request.fetchDogApi.mockReset);

    test("testando requisição caso a promisse resolva", async () => {
      request.fetchDogApi.mockResolvedValue("request sucess");

      request.fetchDogApi();
      expect(request.fetchDogApi).toHaveBeenCalled();
      expect(request.fetchDogApi).toHaveBeenCalledTimes(1);
      await expect(request.fetchDogApi()).resolves.toBe("request sucess");
      expect(request.fetchDogApi).toHaveBeenCalledTimes(2);
    });

    test("testando requisição caso a promisse seja rejeitada", async () => {
      request.fetchDogApi.mockRejectedValue("request failed");

      expect(request.fetchDogApi).toHaveBeenCalledTimes(0);
      await expect(request.fetchDogApi()).rejects.toMatch("request failed");
      expect(request.fetchDogApi).toHaveBeenCalledTimes(1);
    });
  });
});
