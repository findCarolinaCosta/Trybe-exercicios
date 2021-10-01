const findAnimalByAge = require('./ex6-base');

describe('6.2 - Adicione uma nova funcionalidade para buscar pela idade dos animais. O retorno deve ser um array de objetos, mas, caso não ache nenhum, retorne uma mensagem de erro. Escreva tanto a função como o seu teste.', () => {
  describe('Testando promise - findAnimalByAge', () => {
    describe('Quando existe o animal com o a idade', () => {
      test('Verifique o primeiro nome do animal no array retornado', () => {
        const animals = [{ name: 'Preguiça', age: 5, type: 'Cat' }];
        return expect(findAnimalByAge(5)).resolves.toEqual(animals);
      });
    });

    describe('Quando não existe o animal com o nome procurado', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(findAnimalByAge(3)).rejects
          .toEqual(new Error('Nenhum animal encontrado!'));
      });
    });
  });
});