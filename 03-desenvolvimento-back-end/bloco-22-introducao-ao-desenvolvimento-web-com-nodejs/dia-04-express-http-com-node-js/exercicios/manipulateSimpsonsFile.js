const fs = require("fs/promises");

function readSimpsonsFile() {
  return fs
    .readFile("./simpsons.json", "utf-8")
    .then((content) => JSON.parse(content));
}

function writeSimpsonsFile(newSimpson) {
  return fs.writeFile("./simpsons.json", JSON.stringify(newSimpson));
}

module.exports = { readSimpsonsFile, writeSimpsonsFile };
