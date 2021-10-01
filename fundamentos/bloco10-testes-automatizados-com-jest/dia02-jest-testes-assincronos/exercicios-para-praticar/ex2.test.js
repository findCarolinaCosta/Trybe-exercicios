const getUserName = require('./base-ex2-ex3');

describe('Função getUserName - promise', () => {
  describe('Para quando o id do usuário existe', () => {
    it('Verifica se retorna o esperado', () => {
      getUserName(1).then((data) => expect(data).toEqual('Mark'));
    });
  });


  describe('Para quando o id do usuário não existe', () => {
    it('Verifica se retorn o erro esperado', async () => {
      expect.assertions(1);
      await expect(getUserName(3)).rejects
        .toEqual(new Error('User with 3 not found.'));
    });
  });
});