// interface somente descrever o objeto, define que o contrato de código exige
interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

// Quem implementa a interface deve atender ao contrato fornecendo os detalhes de implementação necessários
let employee: Employee = {
  firstName : "John",
  lastName: "Doe",
  fullName(): string {
      return this.firstName + " " + this.lastName; // usamos o "this" para acessar as propriedades da interface
  }
}