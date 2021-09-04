// 1
const getFactorial = number => {
  let result = 1;
  for (let index = 2; index <= number; index += 1) {
    result *= index;
  }
  return result;
}
const returnOut = `O resultado da fatoração é ${getFactorial(5)}`;
console.log(returnOut);

//Bônus forma recursiva
const getFactorial2 = number => number > 1 ? number * getFactorial(number - 1) : 1;
const returnOut2 = `O resultado da fatoração é ${getFactorial2(5)}`
console.log(returnOut2);

// 2
const longestWord = phrase => {
  let wordArray = phrase.split(' ');
  let maxLength = 0;
  let result = '';
  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length;
      result = word;
    }
  }
  return result;
}
const longestWordInSentence = `(Função complexa) A maior palavra dessa frase é: ${longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')}`
console.log(longestWordInSentence);

//Em uma linha
const longestWord2 = text => text.split(' ').sort((a, b) => b.length - a.length)[0];
const longestWordInSentence2 = `(A mesma função em uma linha)A maior palavra dessa frase é: ${longestWord2("Antonio foi no banheiro e não sabemos o que aconteceu")}`
console.log(longestWordInSentence2);

// 3 
// arquivo exercise3.html

// 4
const array = ["HTML", "CSS", "JavaScript", "Soft Skill"];

function buildSkillsPhrase(paramOne) {
  const fun1 = paramInner => (
    `Tryber ${paramInner} aqui!

      Tudo bem?`
  );

  let result = `${fun1(paramOne)}

    Minhas cinco principais habilidades são:`;

  array.forEach((skill, index) =>
    result = `${result}

    - ${skill}`);

  result = `
${result}

    #goTrybe
    `;

  return result;
}

console.log(buildSkillsPhrase("Carolina"));
