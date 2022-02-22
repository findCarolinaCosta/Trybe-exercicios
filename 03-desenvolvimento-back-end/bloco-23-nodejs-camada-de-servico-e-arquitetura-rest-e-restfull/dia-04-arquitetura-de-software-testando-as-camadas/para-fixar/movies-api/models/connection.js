const mysql = require("mysql2/promise");

require("dotenv").config();

const connection = mysql.createPool({
  host: MYSQL_HOST,
  user: MYSQL_USER,
  password: MYSQL_PASS,
  database: MYSQL_DB,
});

module.exports = connection;
