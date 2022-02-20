const connection = require("../services/connection");

const getAll = async () => {
  const [books] = await connection.execute(
    "SELECT * FROM model_example.books;"
  );
  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getByAuthorId = async (authorId) => {
  const query = "SELECT * FROM model_example.books WHERE author_id=?;";
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const getById = async (id) => {
  const query = "SELECT * FROM model_example.books WHERE id=?;";
  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return;

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
};

const createBook = async ({ title, author_id }) =>
  connection.execute(
    "INSERT INTO model_example.books (title, author_id) VALUES (?,?)",
    [title, author_id]
  );

const update = async ({ id, title, author_id }) => {
  const query =
    "UPDATE model_example.books SET title = ?, author_id = ? WHERE id = ?;";
  const [result] = await connection.execute(query, [title, author_id, id]);

  return { id, title, author_id, infos: result.info };
};

const deleteBook = async (id) => {
  const query = "DELETE FROM model_example.books WHERE id = ?;";
  return await connection.execute(query, [id]);
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  createBook,
  update,
  deleteBook,
};
