const tester = (numberChosen, numberRandow) => numberChosen === numberRandow;

const drawResult = (numberChosen, callback) => {
  const numberRandow = Math.floor((Math.random() * 5) + 1);
  const msgNumberRandow = `O número sorteado foi ${numberChosen}.`;
  const msgNumberChosen = `O número escolhido foi ${numberChosen}.`;
  const conditional = callback(numberChosen, numberRandow) ? 'Parabéns você ganhou' : 'Tente novamente';
  const showInDetail = [msgNumberChosen, msgNumberRandow, conditional].join('\n');
  return showInDetail;
};

const lotteryy = drawResult(4, tester);
console.log(lotteryy);
