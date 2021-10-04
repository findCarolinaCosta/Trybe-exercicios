const findAnimalsByType = require('../Promises/testando-promises.test')

describe('Testando promise - findAnimalsByType', () => {
  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      const listDogs = [
        { name: 'Dorminhoco', age: 1, type: 'Dog' },
        { name: 'Soneca', age: 2, type: 'Dog' },
      ];
      return expect(findAnimalsByType('Dog')).resolves.toEqual(listDogs);
    });
  });

  describe('Quando o tipo de animal não existe', () => {
    test('Retorna um erro', () => (
      expect(findAnimalsByType('Lion'))
        .rejects.toEqual(new Error('Não possui esse tipo de animal.'))
    ));
  });
});

// //No Jest 20.0.0, para simplificar ainda mais os testes, foram adicionados os matchers .resolves e .rejects .
// O .resolves espera a promise ser resolvida. Caso a promise seja rejeitada, o teste automaticamente irá falhar.
// O .rejects espera a promise ser rejeitada. Caso a promise seja resolvida, o teste automaticamente irá falhar.

//Obs: desta forma não é necessário utilizar o expect.assertions , pois os matchers verificam o estado da promise.