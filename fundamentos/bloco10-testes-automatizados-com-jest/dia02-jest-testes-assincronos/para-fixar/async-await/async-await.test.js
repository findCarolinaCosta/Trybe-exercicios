const findAnimalsByType = require('../Promises/testando-promises.test')

describe('Para fixar Async/Await', () => {
  test('Testando com async/await', async () => {
    const listDogs = await findAnimalsByType('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
  // Abaixo está o código para quando ocorre o reject da promise. É necessário adicionar o bloco try/catch .
  test('Testando com async/await, testando o reject', async () => {
    try {
      await findAnimalsByType('Lion');
    } catch (error) {
      expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
    } //getListAnimals não lançar o erro como esperamos o bloco do catch não será executado, fazendo com que a nossa asserção não tenha efeito e o teste seja um falso-positivo
  });
})