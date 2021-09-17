const random = (limit) => Math.floor(Math.random() * limit) + 1;

const promise = new Promise((resolve, reject) => {
  const array = [];
  while (array.length < 10) {
    array.push(random(50));
  }

  const sum = array.map(num => num * num)
    .reduce((sum, num) => sum + num);
  sum < 8000 ? resolve() : reject();
});

promise
  .then(() => console.log('Promise resolvida'))
  .catch(() => console.log('Promise rejeitada'))

