const connection = require("./connection");

// Cria uma string com o nome completo da pessoa autora

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(" ");

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) =>
  getNewAuthor({
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name,
  });

// Busca todos os autores do banco.

const getAll = async () => {
  const [authors] = await connection.execute(
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors;"
  );
  return authors.map(serialize);
};

/*
Busca uma pessoa autora específica, a partir do seu ID
@param {String} id ID da pessoa autora a ser recuperado
*/
const findById = async (id) => {
  const query =
    "SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?";

  const [authorData] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  return serialize(authorData[0]);
};

const createAuthor = async ({ first_name, middle_name, last_name }) => {
  const [author] = await connection.execute(
    "INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?, ?, ?)",
    [first_name, middle_name, last_name]
  );
  return serialize({ id: author.insertId, first_name, middle_name, last_name });
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
