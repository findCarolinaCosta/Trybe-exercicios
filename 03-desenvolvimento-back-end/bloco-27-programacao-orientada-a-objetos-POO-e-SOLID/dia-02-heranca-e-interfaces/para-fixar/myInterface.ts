interface IMyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

class MyClass implements IMyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

class Teste extends MyClass {}

const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(4));

const myObject2 = new Teste(2);
console.log(myObject2.myNumber);
console.log(myObject2.myFunc(4));