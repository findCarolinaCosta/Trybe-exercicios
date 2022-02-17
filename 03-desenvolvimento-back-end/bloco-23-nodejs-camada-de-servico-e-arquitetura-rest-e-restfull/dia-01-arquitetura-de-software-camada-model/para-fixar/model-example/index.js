const express = require("express");
const bodyParser = require("body-parser");

const Author = require("./models/Author");
const { writeFile } = require("fs/promises");

const app = express();

app.use(bodyParser.json());

const Book = require("./models/Book");

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  await writeFile("./authors.json", JSON.stringify(authors));
  return res.status(200).json(authors);
});

app.get("/books", async (req, res) => {
  const { author_id } = req.query;

  const books = author_id
    ? await Book.getByAuthorId(author_id)
    : await Book.getAll();

  res.status(200).json(books);
});

app.get("/authors/:id", async (req, res) => {
  const { id } = req.params;
  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: "Author not found" });

  res.status(200).json(author);
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: "Not found" });

  res.status(200).json(book);
});

app.post("/authors", async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: "Autor criado com sucesso! " });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
