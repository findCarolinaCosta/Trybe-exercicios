const findAnimalsByType = require('../Promises/testando-promises.test')

describe('Para fixar Async/Await', () => {
  test('Testando com async/await', async () => {
    const listDogs = await findAnimalsByType('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });
  test('Testando com async/await, testando o reject', async () => {
    expect.assertions(1);
    try {
      await findAnimalsByType('Lion');
    } catch (error) {
      expect(error).toEqual(new Error('Não possui esse tipo de animal.'));
    }
  }); //Da mesma forma que usamos expect.assertions com promises também precisamos usar com o async/await , para garantir que caso a asserção não seja executada o teste falhe.
})