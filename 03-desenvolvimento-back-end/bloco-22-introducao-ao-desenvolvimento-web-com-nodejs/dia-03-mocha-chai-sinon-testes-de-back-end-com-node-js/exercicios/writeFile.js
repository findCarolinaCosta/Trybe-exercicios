const fs = require("fs");

module.exports = (nomeDoArquivo, conteudoDoArquivo) => {
  fs.writeFileSync(`./${nomeDoArquivo}`, conteudoDoArquivo);

  return "ok";
};
