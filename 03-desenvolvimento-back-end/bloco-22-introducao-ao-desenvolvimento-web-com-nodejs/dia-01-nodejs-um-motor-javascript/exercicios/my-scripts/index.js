const readline = require("readline-sync");

const lista = ["Calculo de IMC", "Calculo velocidade média", "Sorteio"];

lista.forEach((item, index) => {
  console.log(`   ${index + 1} - ${item}`);
});

const question = readline.questionInt(
  "Escolha opção de 1 á 3 para executar(somente o número correspondente): "
);

if (question === 1) {
  console.log(`Opção escolhida: ${question}`);
  require("./imc.js");
}

if (question === 2) {
  console.log(`Opção escolhida: ${question}`);
  require("./velocidade.js");
}

if (question === 3) {
  console.log(`Opção escolhida: ${question}`);
  require("./sorteio.js");
}

if (question > lista.length || question <= 0)
  console.log("Número inválido. Saindo");
