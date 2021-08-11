let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (let output in car) {
    console.log(output + ':' + ' ' + car[output]);
}