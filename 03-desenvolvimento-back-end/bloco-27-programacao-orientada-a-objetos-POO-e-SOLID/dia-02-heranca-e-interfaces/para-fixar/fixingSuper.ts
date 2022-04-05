class Animal {
  constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
  constructor(public name: string) {
    super(new Date());
  }
}

class Superclass2 {
  isSuper: boolean;

  constructor() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá mundo!');
  }
}

class Subclass2 extends Superclass2 {
  // No construtor da _Subclass2_, o atributo _isSuper_ deve ser setado como `false`. Você vai precisar utilizar o _super_.
  constructor() {
    super();
    this.isSuper = false;
  }
}

const myFunc2 = (object: Superclass2) => {
  object.sayHello();
  // Dentro da função que recebe um objeto da _Superclass2_ como parâmetro, cheque o valor do atributo _isSuper_ e imprima no console "Super!" se for `true` e "Sub!" se for `false`;
  console.log(object.isSuper ? 'Super!' : 'Sub!');
};

const sup2 = new Superclass2();
const sub2 = new Subclass2();

myFunc2(sup2);
myFunc2(sub2);