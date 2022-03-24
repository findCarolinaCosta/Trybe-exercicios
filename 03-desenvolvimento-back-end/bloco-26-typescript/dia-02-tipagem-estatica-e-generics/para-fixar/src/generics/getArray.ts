// para garantir valores de um determinado tipo é adicionada assim um generic
function getArray<T>(items : T[]) : T[] {
  return new Array<T>().concat(items);
}

let numberArray = getArray<number>([5, 10, 15, 20]);
numberArray.push(25);
// numberArray.push("This is not a number"); // Isto vai gerar um erro de compilação

let stringArray = getArray<string>(["Cats", "Dogs", "Birds"]);
stringArray.push("Rabbits");
// stringArray.push(30); // Isto vai gerar um erro de compilação