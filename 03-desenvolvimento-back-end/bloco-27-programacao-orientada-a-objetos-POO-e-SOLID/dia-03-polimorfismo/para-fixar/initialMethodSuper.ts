class Animal2 {
  constructor(public name: string) { }
  move() { console.log(`${this.name} está se movendo.`); }
}
class Bird2 extends Animal2 {
  move() {
    //obs: name fica o da classe atual exemplo Papagaio
    super.move(); // chamar a implementação move na superclasse por meio do super
    console.log(`${this.name} está voando.`);
  }
}
class Mammal2 extends Animal2 {
  move() { console.log(`${this.name} está andando.`); }
}

const a2 = new Animal2('Tubarão');
const b2 = new Bird2('Papagaio');
const m2 = new Mammal2('Tatu');

const myMove2 = (animal: Animal2) => {
  animal.move();
}
myMove2(a2);
myMove2(b2);
myMove2(m2);

/*
Saída:
Tubarão está se movendo.
Papagaio está se movendo.
Papagaio está voando.
Tatu está andando.
*/