const fs = require('fs').promises;

async function replaceNelson () {
  return await fs.readFile('./simpsonsFamily.json', 'utf-8')
    .then((fileContent) => JSON.parse(fileContent))
    .then((simpsons) => simpsons.filter((simpson) => simpson.id !== '8'))
    .then((simpsonsWithoutNelson) => simpsonsWithoutNelson
      .concat([{ 'id': '8', 'name': 'Maggie Simpson' }]))
    .then((simpsonsWithMaggie) =>
      fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie)));
}

replaceNelson();
