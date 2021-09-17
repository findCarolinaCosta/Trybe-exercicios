const getArray = (max, limit) => {
  const array = [];
  const getRandomNumber = (limit) => Math.floor(Math.random() * limit) + 1;
  while (array.length < max) {
    array.push(getRandomNumber(limit));
  }
  return array;
}

const getArrayAddedSum = (numbers) => {
  return numbers.map(number => Math.pow(number, 2))
    .reduce((acc, number) => acc + number);
}

const getSum = () => {
  return new Promise((resolve, reject) => {
    const numbers = getArray(10, 50);
    const sum = getArrayAddedSum(numbers);
    sum < 8000 ? resolve(sum) : reject();
  })
}

const sumArrayFromSum = sum => [2, 3, 5, 10].map(number => sum / number)
  .reduce((acc, num) => num + acc, 0);

const asyncSum = async () => {
  try {
    const sum = await getSum()
    const sumFromSum = await sumArrayFromSum(sum)
    const teste = console.log('Processo concluído com sucesso')
  } catch (error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

asyncSum();