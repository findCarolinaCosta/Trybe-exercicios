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

    if (!book)
      return res
        .status(404)
        .json({ error: true, message: "Livro não encontrado" });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function createBook(req, res, next) {
  try {
    const { title, authorId } = req.body;

    const book = await Book.createBook({ title, authorId });

    if (!book)
      return res
        .status(404)
        .json({ error: true, message: "Autor não encontrado" });

    return res.status(201).json({ message: "Livro criado com sucesso! " });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

const getIsValid = async (authorId) => await Book.getIsValid(authorId);

async function update(req, res, next) {
  try {
    const { title, authorId } = req.body;
    const { id } = req.params;

    const updateBook = await Book.update({ id, title, authorId });

    if (!updateBook) {
      return res
        .status(404)
        .json({ error: true, message: "Livro não encontrado" });
    }

    return res.status(200).json(updateBook);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteBook(req, res, next) {
  try {
    const { id } = req.params;

    const book = await Book.getById(id);

    if (!book)
      return res
        .status(404)
        .json({ error: true, message: "Livro não encontrado" });

    await Book.deleteBook(id);

    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getAll,
  getById,
  createBook,
  getIsValid,
  update,
  deleteBook,
};
