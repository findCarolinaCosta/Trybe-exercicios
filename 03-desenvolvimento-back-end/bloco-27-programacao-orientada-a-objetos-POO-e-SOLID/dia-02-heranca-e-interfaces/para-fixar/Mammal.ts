import Animal from './Animal';

class Mammal extends Animal {
  walk() {
    console.log(`${this.name} está andando!`);
  }
}

const tiger = new Mammal(
  'Tigre',
  new Date(Date.parse('May 03, 2020')),
);

const main = (animal: Animal) => {
  console.log(animal.age);
}

main(tiger);
tiger.walk();

/*
Saída (código rodado em Mar/2022):

Tigre está andando!
*/

// const main = (animal: Animal) => {
//   console.log(animal.age);
//   animal.walk(); // error: Property 'walk' does not exist on type 'Animal'.
// }

// main(tiger);