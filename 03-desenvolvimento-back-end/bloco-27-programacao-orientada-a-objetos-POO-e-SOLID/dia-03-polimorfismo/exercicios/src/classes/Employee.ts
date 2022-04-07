import IEnrollable from "../IEnrollable";
import Person from "./Person";

export default class Employee extends Person implements IEnrollable {
  private _salary: number = Number();
  private _admissionDate: Date;
  private _enrollment: string = String();

  constructor(name: string, birthDate: Date, salary: number) {
    super(name, birthDate);

    this._salary = salary;
    this._admissionDate = new Date();
    this._enrollment = this.generateEnrollment();
  }

  get salary(): number {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 0) throw new Error("enrollment");
    this._salary = value;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(value: Date) {
    if (value.getTime() > new Date().getDate()) {
      throw new Error("A data de admissão não pode ser no futuro");
    }

    this._admissionDate = value;
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16)
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres.");

    this._enrollment = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );
    return `FUNC${randomStr}`;
  }
}
