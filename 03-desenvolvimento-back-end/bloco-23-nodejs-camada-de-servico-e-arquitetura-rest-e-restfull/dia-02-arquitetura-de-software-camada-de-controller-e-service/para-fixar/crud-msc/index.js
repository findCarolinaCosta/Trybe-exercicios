const express = require("express");
const bodyParser = require("body-parser");

require("dotenv").config();

const Author = require("./controllers/Author");

const Book = require("./controllers/Book");
const validate = require("./middlewares/validate");
const middlewares = require("./middlewares");

const app = express();

app.use(bodyParser.json());
app
  .route("/books")
  .get(Book.getAll)
  .post(validate.isValidBook, Book.createBook);
app
  .route("/books/:id")
  .get(Book.getById)
  .put(validate.isValidBook, Book.update)
  .delete(Book.deleteBook);

app
  .route("/authors")
  .get(Author.getAll)
  .post(validate.isValidAuthor, Author.create);
app
  .route("/authors/:id")
  .get(Author.findById)
  .put(validate.isValidAuthor, Author.update)
  .delete(validate.isValidAuthor, Author.deleteAuthor);

app.use(middlewares.error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
