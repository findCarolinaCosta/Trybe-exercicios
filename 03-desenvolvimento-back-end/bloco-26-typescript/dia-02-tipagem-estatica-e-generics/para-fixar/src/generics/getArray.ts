// para garantir valores de um determinado tipo é adicionada assim um generic
function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]); // infere o tipo
let stringArray = getArray(["Cats", "Dogs", "Birds"]);  // infere o tipo
numberArray.push(25);
stringArray.push("Rabbits");
// numberArray.push("isto não é um número"); // retorna erro com generic
// stringArray.push(30); // retorna erro com generic
console.log(numberArray);
// Saída:  [5, 10, 15, 20, 25, "isto não é um número"]
console.log(stringArray);
// Saída: ["Cats", "Dogs", "Birds", "Rabbits", 30]