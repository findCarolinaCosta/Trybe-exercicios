import Teacher from "../Teacher";

export default class Evaluation {
  private _score: number = Number();
  private _teacher: Teacher;
  private _type: string = String();

  constructor(teacher: Teacher, score: number, type: string) {
    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error("A pontução deve ser positiva.");
    if (this._type === "prova" && value > 25) {
      throw new Error("A pontução deve ser menor que 25 pontos.");
    }
    if (this._type === "trabalho" && value > 50) {
      throw new Error("A pontução deve ser menor que 50 pontos.");
    }

    this._score = value;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(value: Teacher) {
    this._teacher = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    if (!["prova", "trabalho"].includes(value)) {
      throw new Error(
        'O tipo da avaliação aceita os seguintes valores: "prova" e "trabalho"'
      );
    }

    this._type = value;
  }
}
