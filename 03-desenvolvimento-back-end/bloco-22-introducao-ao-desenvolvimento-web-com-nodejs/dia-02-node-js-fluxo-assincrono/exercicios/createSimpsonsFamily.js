const fs = require("fs").promises;

async function createSimpsonsFamily() {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  const simpsonsFamily = characters.filter((character) =>
    ["1", "2", "3", "4"].includes(character.id)
  );

  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFamily));
}

createSimpsonsFamily();
