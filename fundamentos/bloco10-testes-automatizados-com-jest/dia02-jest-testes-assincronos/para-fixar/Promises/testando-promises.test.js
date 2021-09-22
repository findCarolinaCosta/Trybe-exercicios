const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve) => { // linha alterada
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);

      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return resolve(new Error('Não possui esse tipo de animal.')); // linha alterada
    }, 100);
  })
);

describe('Quando o tipo do animal existe', () => {
  it('Retorne a lista de animais', () => (
    findAnimalsByType('Dog').then((listDogs) => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    })
  ));
  //testes do erro
  it('Retorna o erro', () => (
    findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ))
  ));
});

describe('Quando o tipo do animal, não existe', () => {
  test('Retorne a lista de animais', () => {
    expect.assertions(1);
    return findAnimalsByType('Lion').catch((error) => (
      expect(error.message).toMatch('Não possui esse tipo de animal.')
    ));
  });
}); //falha com uma mensagem dizendo que era esperada uma asserção