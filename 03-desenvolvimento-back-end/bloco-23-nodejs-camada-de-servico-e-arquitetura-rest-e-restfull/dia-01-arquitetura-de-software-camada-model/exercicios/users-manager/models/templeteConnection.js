const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "localhost",
  user: "seu_usuario",
  password: "sua_senha",
  database: "users_crud",
});

module.exports = connection;
