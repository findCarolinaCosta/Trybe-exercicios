
class Student {
  private _registration: string;
  private _name: string = String();
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string) {
      this._registration = enrollment;
      this.name = name;
      this._examsGrades = [];
      this._worksGrades = [];
  }

  get enrollment(): string {
      return this._registration;
  }

  set enrollment(value: string) {
      this._registration = value;
  }

  get name(): string {
      return this._name;
  }

  set name(value: string) {
      if (value.length < 3) {
          throw new Error('O nome deve conter no mínimo 3 caracteres.');
      }

      this._name = value;
  }

  get examsGrades(): number[] {
      return this._examsGrades;
  }

  set examsGrades(value: number[]) {
      if (value.length > 4) {
          throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
      }

      this._examsGrades = value;
  }

  get worksGrades(): number[] {
      return this._worksGrades;
  }

  set worksGrades(value: number[]) {
      if (value.length > 2) {
          throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
      }

      this._worksGrades = value;
  }

}


// Para testar!

const studentOne = new Student('20140120', 'Aurora Rosa');
const studentTwo = new Student('20001212', 'Joaquim Rosa');

console.log({Students: [studentOne, studentTwo]});