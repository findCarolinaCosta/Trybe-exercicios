const connection = require("../services/connection");

const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  //`Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(" ");
  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName,
  };
};

const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name,
});

const getAll = async () => {
  const [authors] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors"
  );
  return authors.map(serialize).map(getNewAuthor);
};

const findById = async (id) => {
  const query =
    "SELECT first_name, middle_name, last_name FROM model_example.authors WHERE id = ?";
  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return;

  const { firstName, middleName, lastName } = authorData.map(serialize)[0];

  return getNewAuthor({
    id,
    firstName,
    middleName,
    lastName,
  });
};

const create = async ({ first_name, middle_name, last_name }) => {
  return connection.execute(
    "INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)",
    [first_name, middle_name, last_name]
  );
};

const findByName = async ({ first_name, middle_name, last_name }) => {
  const query =
    "SELECT first_name, middle_name, last_name FROM model_example.authors WHERE first_name = ? AND middle_name = ? AND last_name = ?;";
  const [authors] = await connection.execute(query, [
    first_name,
    middle_name,
    last_name,
  ]);

  return authors;
};

const update = async (obj) => {
  const query =
    "UPDATE model_example.authors SET first_name = ?, middle_name = ?, last_name = ?, birthday = ?, nationality = ? WHERE id = ?;";
  await connection.execute(query, [
    obj.first_name,
    obj.middle_name,
    obj.last_name,
    obj.birthday,
    obj.nationality,
    obj.id,
  ]);

  return await findById(obj.id);
};

const deleteAuthor = async (id) =>
  await connection.execute("DELETE FROM model_example.authors WHERE id = ?;", [
    id,
  ]);

module.exports = {
  getAll,
  findById,
  create,
  findByName,
  update,
  deleteAuthor,
};
