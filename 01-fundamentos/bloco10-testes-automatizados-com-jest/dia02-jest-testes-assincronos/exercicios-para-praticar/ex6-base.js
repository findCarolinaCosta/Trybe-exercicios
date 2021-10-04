// Use como base para os exercícios a seguir:
const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      };

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 100);
  })
);

const findAnimalByName = (name) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const animalNameFound = Animals.find((animal) => animal.name === name);

      if (animalNameFound) resolve(animalNameFound);

      return reject(new Error('Nenhum animal com esse nome!'));
    }, 100);
  })
);

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);

      if (listAnimals.length > 0) resolve(listAnimals);

      return reject(new Error('Nenhum animal encontrado!'));
    }, 100);
  })
)

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

const functions = (findAnimalByName, findAnimalByAge);
module.exports = functions;
