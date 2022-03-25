// Uma interface pode estender de outra, copiando os membros de uma interface em outra = extends
interface Teacher extends Employee {
  // é necessário implementar todas as propriedades necessárias de todas as interfaces, como boa prática
  firstName: string;
  lastName: string;
  subject: string;
  fullName(): string;
  sayHello(): string;
}

let teacher: Teacher = {
  firstName: "John",
  lastName: "Doe",
  subject: "Matemática",
  fullName(): string {
      return this.firstName + " " + this.lastName;
  },
  sayHello(): string {
      return `Olá, eu sou ${this.fullName()} e leciono ${this.subject}`;
  }
}

console.log(teacher.sayHello());