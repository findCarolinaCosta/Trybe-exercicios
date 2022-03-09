require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.DATABASE_DEV,
    "host": process.env.HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.DATABASE_TEST,
    "host": process.env.HOST,
    "dialect": "mysql",
    // adicione essa linha a sua configuração para omitir mensagens de log no orm
    "logging": false
  },
  "production": {
    "username": process.env.MYSQL_USER,
    "password": process.env.MYSQL_PASSWORD,
    "database": process.env.DATABASE_PRODUCTION,
    "host": process.env.HOST,
    "dialect": "mysql"
  }
}
