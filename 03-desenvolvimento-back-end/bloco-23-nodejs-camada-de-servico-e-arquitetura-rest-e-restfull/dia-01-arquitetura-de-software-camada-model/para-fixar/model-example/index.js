const express = require("express");

const app = express();

const Author = require("./models/Author");
const { writeFile } = require("fs/promises");

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  await writeFile("./authors.json", JSON.stringify(authors));
  return res.status(200).json(authors);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
