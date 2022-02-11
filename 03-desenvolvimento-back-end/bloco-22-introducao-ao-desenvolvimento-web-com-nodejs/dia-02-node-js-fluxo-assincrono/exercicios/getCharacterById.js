const fs = require("fs").promises;

async function getCharacterById(id) {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  const chosenCharacter = characters.find(
    (character) => character.id === `${id}`
  );

  if (!chosenCharacter) throw new Error("id não encontrado");

  console.log(`Id: ${chosenCharacter.id}, Name: ${chosenCharacter.name}`);

  return chosenCharacter;
}

getCharacterById(2);
