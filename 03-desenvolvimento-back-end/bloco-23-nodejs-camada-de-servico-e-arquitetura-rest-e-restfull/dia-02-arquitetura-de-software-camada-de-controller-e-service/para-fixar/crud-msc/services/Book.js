const Author = require("../models/Author");
const Book = require("../models/Book");

const getAll = async (author_id) =>
  author_id ? await Book.getByAuthorId(author_id) : await Book.getAll();

const getById = async (id) => {
  const book = await Book.getById(id);

  if (!book) {
    return {
      error: {
        code: "notFound",
        message: "Livro não encontrado",
      },
    };
  }

  return book;
};

const createBook = async (title, authorId) => {
  const author = await Author.findById(authorId);
  const serializeToDB = {
    author_id: authorId,
    title,
  };

  if (!author) {
    return {
      error: {
        code: "notFound",
        message: "Autor não encontrado",
      },
    };
  }

  return Book.createBook(serializeToDB);
};

const getIsValid = async (authorId) => await Book.getByAuthorId(authorId);

module.exports = {
  getAll,
  createBook,
  getById,
  getIsValid,
};
