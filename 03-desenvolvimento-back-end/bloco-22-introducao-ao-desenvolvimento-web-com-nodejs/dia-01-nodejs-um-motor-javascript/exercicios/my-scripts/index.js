const readline = require("readline-sync");

const lista = {
  1: "Calculo de IMC",
  2: "Calculo velocidade média",
  3: "Sorteio",
};

Object.keys(lista).forEach((item) => {
  console.log(`   ${item} - ${lista[item]}`);
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

console.log("Número inválido. Saindo");
