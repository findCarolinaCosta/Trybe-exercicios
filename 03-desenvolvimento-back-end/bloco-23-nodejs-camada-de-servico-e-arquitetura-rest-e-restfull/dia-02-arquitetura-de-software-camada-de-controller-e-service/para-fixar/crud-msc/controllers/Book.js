const Book = require("../services/Book");

async function getAll(req, res, next) {
  try {
    const { author_id } = req.query;

    const books = await Book.getAll(author_id);

    return res.status(200).json(books);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const book = await Book.getById(id);

    if (!book) return res.status(404).json({ message: "Not found" });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function createBook(req, res) {
  try {
    const { title, authorId } = req.body;

    await Book.createBook(title, authorId);

    return res.status(201).json({ message: "Livro criado com sucesso! " });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

const getIsValid = async (authorId) => await Book.getIsValid(authorId);

module.exports = {
  getAll,
  getById,
  createBook,
  getIsValid,
};
