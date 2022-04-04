class Person2 {
  name: string;
  private _weight: number;
  private _age: number;
  readonly height: number;

  constructor(name: string, height: number, weight: number, age: number) {
    this.name = name;
    this._weight = weight;
    this._age = age;
    this.height = height;
  }

  getWeight() {
    return this._weight;
  }

// esta sintaxe permite acessar o valor retornado via person.age (como se fosse um atributo normal)
// getters
  get age() {
    return this._age;
  }

// do mesmo modo, esta sintaxe permite modificar o valor com uma simples atribuição: person.age = 42 
// setters
  set age(newValue: number) {
    if (newValue >= 0 && newValue < 200) {
      this._age = newValue;
    }
  }

  birthday() {
    this._age += 1;
  }

}

const pessoa1 = new Person2('Maria', 171, 58, 19);
const pessoa2 = new Person2('João', 175, 66, 18);

// Alteração direta de variável pública
pessoa1.name = 'Mariah';
// Acesso direto a variável pública
console.log(pessoa1.name);
// Acesso a método público que manipula atributo privado
console.log(pessoa1.getWeight());
// Acesso a método com getter para manipular atributo privado como se fosse público
console.log(pessoa2.age);
// Acesso a método público que manipula atributo privado
pessoa2.birthday();
console.log(pessoa2.age);
// Acesso a método com setter para manipular atributo privado como se fosse público
pessoa2.age = 17;
console.log(pessoa2.age);
// Leitura de atributo readonly
console.log(pessoa1.height);

/*
Saída:
Mariah
58
18
19
17
171
*/

pessoa2.age = 300;
console.log(pessoa2.age); // validação no set age impede que existam pessoas com 300 anos de idade
// Saída: 17

// Acesso externo à classe a atributo privado
// erro: A propriedade '_weight' é particular e somente é acessível na classe 'Person2

// pessoa1._weight; 
// pessoa1._weight = 1;

// Acesso a atributo inexistente

// pessoa1.weight;
// pessoa1.weight = 1;

// Escrita em atributo readonly

// pessoa1.height = 1;