/*
Dicionário en-pt:
- fish: peixe
*/

abstract class Animal3 {
  constructor(public name: string) { }
  abstract move(): void
}
class Bird3 extends Animal3 {
  move() { console.log(`${this.name} está voando.`); }
}
class Mammal3 extends Animal3 {
  move() { console.log(`${this.name} está andando.`); }
}
class Fish extends Animal3 {
  move() { console.log(`${this.name} está nadando.`); }
}

const a3 = new Fish('Tubarão');
const b3 = new Bird3('Papagaio');
const m3 = new Mammal3('Tatu');

const myMove3 = (animal: Animal3) => {
  animal.move();
}
myMove3(a3);
myMove3(b3);
myMove3(m3);

/*
Saída:
Tubarão está nadando.
Papagaio está voando.
Tatu está andando.
*/