// Ao chamar a função doingThings:
doingThings(wakeUp);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const wakeUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleep = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const returns = callback();
  console.log(returns);
};

doingThings(wakeUp);
doingThings(breakfast);
doingThings(sleep);
