const fs = require("fs").promises; //métodos já com a implementação de promises internamente, dispensando o tratamento das callbacks

//todos os arquivos serão lidos ao mesmo tempo
Promise.all([
  fs.readFile("file1.txt"),
  fs.readFile("file2.txt"),
  fs.readFile("file3.txt"),
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`Lidos 3 arquivos totalizando ${fileSizeSum} bytes`);
  })
  .catch((err) => {
    console.error(`Erro ao ler arquivos: ${err.message}`);
  });

//.then será executado quando a leitura de todos eles terminar, recebendo como parâmetro um array com o resultado de cada uma das Promises
