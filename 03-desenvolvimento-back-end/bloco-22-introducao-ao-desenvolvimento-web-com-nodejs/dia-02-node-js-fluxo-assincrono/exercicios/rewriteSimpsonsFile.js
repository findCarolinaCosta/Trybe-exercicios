const fs = require("fs").promises;

async function rewriteSimpsonsFile() {
  const characters = await fs
    .readFile("./simpsons.json", "utf-8")
    .then((fileContent) => JSON.parse(fileContent));

  const filteredInfo = characters.filter(
    (character) => character.id !== "10" && character.id !== "6"
  );

  await fs.writeFile("./simpsons.json", JSON.stringify(filteredInfo));
}

rewriteSimpsonsFile();
