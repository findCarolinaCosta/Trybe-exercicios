const getUserName = require('./base-ex2-ex3');

describe('3. Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await. Utilize o try/catch para o caso de erro.', () => {
  describe('Para quando o id do usuário existe', () => {
    it('Verifica se retorna o esperado', async () => {
      const data = await getUserName(1);
      expect(data).toEqual('Mark');
    });
  });

  describe('Para quando o id do usuário não existe', () => {
    it('Verifica se retorn o erro esperado', async () => {
      expect.assertions(1);
      try {
        await getUserName(3);
      } catch (error) {
        expect(error.message).toEqual('User with 3 not found.');
      }
    });
  });
});