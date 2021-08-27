// 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
// * Modifique a estrutura da função para que ela seja uma arrow function .
// * Modifique as concatenações para template literals.
// * Copie o código abaixo.
const testingScope = escopo => {

  if (escopo) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

// 2 - Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// * Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// * Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
// * Copie o código abaixo.

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
const sortArray = () => {
  oddsAndEvens[0] = 2;
  oddsAndEvens[1] = 3;
  oddsAndEvens[2] = 4;
  oddsAndEvens[3] = 7;
  oddsAndEvens[4] = 10;
  oddsAndEvens[5] = 13;

  return oddsAndEvens;
}

console.log(`Escrito da maneira dificil e levando em consideração somente um array especifico: ${sortArray()}`); // será necessário alterar essa linha 😉

const sortArray2 = array => {
  const sortArray = array.sort((num1, num2) => num1 - num2);
  return sortArray;
}
console.log(`Escrito de forma dinâmica que serviria para outros arrays: ${sortArray2(oddsAndEvens)}`);

console.log(`Código escrito em uma linha, dinâmico: ${oddsAndEvens.sort((num1, num2) => num1 - num2)}`);