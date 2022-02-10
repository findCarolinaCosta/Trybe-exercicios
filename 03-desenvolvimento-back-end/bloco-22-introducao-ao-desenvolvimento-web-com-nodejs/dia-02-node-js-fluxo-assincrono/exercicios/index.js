function getAccount(a, b, c) {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      reject("Informe apenas números");
    }

    const result = (a + b) * c;

    if (result < 50) {
      return reject("Valor muito baixo");
    }

    resolve(result);
  });
}

getAccount(20, 2, 4)
  .then((resolve) => console.log(resolve))
  .catch((error) => console.log(error));
