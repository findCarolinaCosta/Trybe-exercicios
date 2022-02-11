const fs = require("fs").promises;

async function arrayToFile() {
  const strings = ["Finalmente", "estou", "usando", "Promise.all", "!!!"];

  const createFilePromises = strings.map((string, index) =>
    fs.writeFile(`./file${index + 1}.txt`, string)
  );

  // Utilizar Promise.all para aguardar a escrita de todos os arquivos
  await Promise.all(createFilePromises);

  const fileNames = [
    "file1.txt",
    "file2.txt",
    "file3.txt",
    "file4.txt",
    "file5.txt",
  ];

  // Utilizar Promise.all para aguardar a leitura de todos os arquivos
  const fileContents = await Promise.all(
    fileNames.map((fileName) => fs.readFile(fileName, "utf-8"))
  );

  const newFileContent = fileContents.join(" ");

  await fs.writeFile("./fileAll.txt", newFileContent);
}

arrayToFile();
