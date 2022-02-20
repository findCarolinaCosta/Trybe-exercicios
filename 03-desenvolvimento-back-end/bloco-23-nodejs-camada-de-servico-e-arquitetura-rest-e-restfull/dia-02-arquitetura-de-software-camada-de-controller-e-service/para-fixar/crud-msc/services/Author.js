const Author = require("../models/Author");

const serializeToDB = (obj) => ({
  id: obj.id,
  first_name: obj.firstName,
  middle_name: obj.middleName,
  last_name: obj.lastName,
  birthday: obj.birthday,
  nationality: obj.nationality,
});

const getAll = async () => await Author.getAll();

const findById = async (id) => await Author.findById(id);

const create = async (obj) => {
  const author = await Author.findByName(serializeToDB(obj));

  if (author.length > 0) return;

  return await Author.create(serializeToDB(obj));
};

const update = async (obj) => await Author.update(serializeToDB(obj));

const deleteAuthor = async (id) => await Author.deleteAuthor(id);

module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteAuthor,
};
