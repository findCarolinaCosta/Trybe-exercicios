const connection = require("./connection");

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

function create({ firstName, lastName, email, password }) {
  const query =
    "INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?);";
  const [result] = connection.execute(query, [
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

module.exports = {
  create,
};
