import Evaluation from "../Evaluation";

export default class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number = Number();

  constructor(evaluation: Evaluation, score: number) {
    this._evaluation = evaluation;
    this._score = score;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(value: Evaluation) {
    this._evaluation = value;
  }

  get score(): number {
    return this._score;
  }

  set score(value: number) {
    if (value < 0) throw new Error("evaluation");
    if (value > this.evaluation.score) {
      throw new Error(
        "A pontuação não pode ser maior que a pontuação da avaliação."
      );
    }
    this._score = value;
  }
}
