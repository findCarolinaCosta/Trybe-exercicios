interface Dog {
  _name: string;
  _breed: string;
  _age?: number;
  speak(): string,
}

class Dog {
  constructor(name: string, breed: string, age?: number) {
    this._name = name;
    this._breed = breed;
    this._age = age;
  }

  speak = () =>  `O cachorro ${this._name} é da raça: ${this._breed}`
}

const dog1 = new Dog('nike', 'Yorkshire terrier')

console.log(dog1.speak());

