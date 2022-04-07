import IEnrollable from "../Interfaces/IEnrollable";
import Person from "./Person";

export default class Student extends Person implements IEnrollable {
  private _enrollment: string = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error("A matrícula deve possuir no mínimo 16 caracteres.");
    }

    this._enrollment = value;
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) {
      throw new Error(
        "A pessoa estudante deve possuir no máximo 4 notas de provas"
      );
    }

    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length > 2) {
      throw new Error("worksGrades");
    }
    this._worksGrades = value;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );
    return randomStr;
  }

  sumGrades(): number {
    return [...this.examsGrades, ...this.worksGrades].reduce(
      (prev, note) => prev + note,
      0
    );
  }

  sumAverageGrade(): number {
    const sum = this.sumGrades();
    const divider = this.examsGrades.length + this.worksGrades.length;

    return Math.round(sum / divider);
  }
}