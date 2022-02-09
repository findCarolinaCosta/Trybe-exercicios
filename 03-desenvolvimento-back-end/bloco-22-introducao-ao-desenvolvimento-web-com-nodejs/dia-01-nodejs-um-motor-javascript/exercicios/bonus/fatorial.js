const readline = require("readline-sync");

const result = (n) => (n === 1 ? 1 : n * result(n - 1));

function getFactorial() {
  const number = readline.questionInt("Informe o valor para fatorial: ");

  if (number <= 0) {
    console.log("Digite um número maior que 0!");
    getFactorial();
    return;
  }

  console.log(`Número: ${number}`);

  console.log(`Resultado: ${result(number)}`);
}

getFactorial();
