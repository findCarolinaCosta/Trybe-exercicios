const Author = require("../models/Author");

const getAll = async () => {
  const authors = await Author.getAll();

  return authors;
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return author;
};

const createAuthor = async ({ firstName, middleName, lastName }) => {
  const serializeDBNorm = {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
  };
  const author = await Author.createAuthor(serializeDBNorm);

  return author;
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
