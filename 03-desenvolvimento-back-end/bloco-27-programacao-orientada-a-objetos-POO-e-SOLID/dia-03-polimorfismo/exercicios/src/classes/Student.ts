import IEnrollable from "../Interfaces/IEnrollable";
import EvaluationResult from "./EvaluationResult";
import Person from "./Person";

export default class Student extends Person implements IEnrollable {
  private _enrollment: string = String();
  private _evaluationsResults: EvaluationResult[] = [];

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

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
}

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(
      /\W/g,
      ""
    );
    return `STU${randomStr}`;
  }

  sumGrades(): number {
    return [...this._evaluationsResults].reduce(
      (prev, note) => prev + note.score,
      0
    );
  }

  sumAverageGrade(): number {
    const sum = this.sumGrades();
    const divider = this._evaluationsResults.length;

    return Math.round(sum / divider);
  }

  addEvaluationResult(value: EvaluationResult): void {
    this._evaluationsResults.push(value);
  }
}