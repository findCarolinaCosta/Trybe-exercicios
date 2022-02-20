const Author = require("../models/Author");
const Book = require("../models/Book");

const serializeToDB = ({ id, authorId, title }) => ({
  id,
  author_id: authorId,
  title,
});

const getAll = async (author_id) =>
  author_id ? await Book.getByAuthorId(author_id) : await Book.getAll();

const getById = async (id) => {
  const book = await Book.getById(id);

  return book;
};

const createBook = async ({ title, authorId }) => {
  const author = await Author.findById(authorId);

  if (!author) return author;

  return Book.createBook(serializeToDB({ title, authorId }));
};

const getIsValid = async (authorId) => await Book.getByAuthorId(authorId);

const update = async ({ id, title, authorId }) =>
  await Book.update(serializeToDB({ id, title, authorId }));

const deleteBook = async (id) => await Book.deleteBook(id);

module.exports = {
  getAll,
  createBook,
  getById,
  getIsValid,
  update,
  deleteBook,
};
