const random = (limit) => Math.floor(Math.random() * limit) + 1;

const promise = new Promise((resolve, reject) => {
  const array = [];
  while (array.length < 10) {
    array.push(random(50));
  }

  const sum = array.map(num => num * num)
    .reduce((sum, num) => sum + num);
  sum < 8000 ? resolve(sum) : reject();
});

promise
  .then((sum => [2, 3, 5, 10].map(number => sum / number)))
  .then(array => array.reduce((acc, num) => num + acc, 0))
  .catch(() =>
    console.log('É mais de oito mil! Essa promise deve estar quebrada!'));