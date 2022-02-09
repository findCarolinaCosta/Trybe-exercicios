const readline = require("readline-sync");

const fibonacci = function (n) {
  let a = 0, // sempre armazena o penúltimo número
    b = 1, // sempre armazena o último número
    f = 1; // armazena a soma do último + penúltimo

  //enquanto menor ou igual a n:
  for (let i = 2; i <= n; i += 1) {
    if (b) console.log(b); // para quantidade exibição = n
    f = a + b; //soma do último + penúltimo
    a = b; // a = penúltimo número
    b = f; // b = último número
  }
  console.log(f);
  return f;
};

function getFibonacci() {
  const n = readline.questionInt("Digite o valor: ");

  if (n <= 0) {
    console.log("Digite um número maior que 0!");
    getFibonacci();
    return;
  }

  console.log(`number: ${n}`);

  fibonacci(n);
}

getFibonacci();
