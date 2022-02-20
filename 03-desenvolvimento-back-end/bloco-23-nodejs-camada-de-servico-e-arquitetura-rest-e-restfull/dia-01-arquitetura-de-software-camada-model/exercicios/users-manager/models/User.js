const connection = require("./connection");
const userSchema = require("../schemas/userSchema");

function isValid(userData) {
  return userSchema.validate(userData);
}

function formatUserData({
  id,
  first_name: firstName,
  last_name: lastName,
  email,
}) {
  return {
    id,
    firstName,
    lastName,
    email,
  };
}

async function create({ firstName, lastName, email, password }) {
  const query =
    "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?);";
  const [result] = await connection.execute(query, [
    firstName,
    lastName,
    email,
    password,
  ]);
  return {
    id: result.insertId,
    firstName,
    lastName,
    email,
  };
}

async function findAll() {
  const [result] = await connection.execute("SELECT * FROM user;");
  return result;
}

async function findById(id) {
  const query = "SELECT * FROM user WHERE id = ?";
  const [result] = await connection.execute(query, [id]);

  if (!result) return null;

  return formatUserData(result);
}

async function updateUser({ id, firstName, lastName, email, password }) {
  const query =
    "UPDATE user SET first_name = ?, last_name = ?, email = ?, password = ? WHERE id = ?;";
  await connection.execute(query, [firstName, lastName, email, password, id]);
  return await findById(id);
}

module.exports = {
  create,
  findAll,
  findById,
  isValid,
  updateUser,
};
