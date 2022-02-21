const readline = require("readline-sync");

const lista = ["fatorial", "fibonacci"];

lista.forEach((item, index) => {
  console.log(`   ${index + 1} - ${item}`);
});

const question = readline.questionInt(
  "Escolha opção de 1 ou 2 para executar(somente o número correspondente): "
);

if (question === 1) {
  console.log(`Opção escolhida: ${question}`);
  require("./fatorial.js");
}

if (question === 2) {
  console.log(`Opção escolhida: ${question}`);
  require("./fibonacci.js");
}

if (question > lista.length || question <= 0)
  console.log("Número inválido. Saindo");
