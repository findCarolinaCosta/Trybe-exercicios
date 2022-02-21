const readline = require("readline-sync");

function getPrizeDraw() {
  const randomNumber = parseInt(Math.random() * 10);

  const answer = readline.questionInt("Digite um número entre 0 e 10: ");

  randomNumber !== answer
    ? console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`)
    : console.log("Parabéns, número correto!");

  const again = readline.question(
    `Jogar novamente? 
(Digite s para sim, e n para não) `
  );

  if (again !== "s") return console.log("Game Over!");

  getPrizeDraw();
}

getPrizeDraw();
