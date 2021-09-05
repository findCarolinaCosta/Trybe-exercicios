//Escreva a função removeMiddle para passar nos testes já implementados.
const removeMiddle = (words) => {
  const middleIndex = Math.floor(words.length / 2);
  const output = [words[middleIndex]];
  words.splice(middleIndex, 1);
  return output;
};
module.exports = removeMiddle;