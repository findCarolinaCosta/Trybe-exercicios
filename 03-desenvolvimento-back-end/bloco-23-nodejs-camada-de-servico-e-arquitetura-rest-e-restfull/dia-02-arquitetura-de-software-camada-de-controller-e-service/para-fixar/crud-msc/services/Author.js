const Author = require("../models/Author");

const getAll = async () => await Author.getAll();

const findById = async (id) => await Author.findById(id);

const create = async ({ firstName, middleName, lastName }) => {
  const serializeToDB = {
    first_name: firstName,
    middle_name: middleName,
    last_name: lastName,
  };

  const author = await Author.findByName(serializeToDB);

  if (author.length > 0) return;

  return await Author.create(serializeToDB);
};

module.exports = {
  getAll,
  findById,
  create,
};
