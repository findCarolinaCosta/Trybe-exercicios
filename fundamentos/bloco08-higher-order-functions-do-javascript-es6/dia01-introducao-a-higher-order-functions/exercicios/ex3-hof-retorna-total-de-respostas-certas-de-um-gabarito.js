const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const validation = (rightAnswers, studentAnswers, act) => {
  let sum = 0;
  for (let index = 0; index < rightAnswers.length; index += 1) {
    const doingAct = act(rightAnswers[index], studentAnswers[index]);
    sum += doingAct;
  }
  return `Resultado final: ${sum} estão corretas`;
};

const getPointCount = validation(RIGHT_ANSWERS, STUDENT_ANSWERS, (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1;
  } if (studentAnswer === 'N.A') {
    return 0;
  }
  return -0.5;
});
console.log(getPointCount);