const express = require("express");

const app = express();

const Author = require("./models/Author");
const { writeFile } = require("fs/promises");

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
