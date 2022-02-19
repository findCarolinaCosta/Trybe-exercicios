const express = require("express");
const bodyParser = require("body-parser");

/* rescue é um wrapper para funções assíncronas que garante que todos os erros assíncronos sejam passados ​​para o 
seu manipulador de erros, evitando aqueles que anotam UnhandledPromiseRejectionWarning ao usar async/await, 
especialmente com rotas/middlewares expressjs. */
const rescue = require("express-rescue");

const Author = require("./controllers/Authors");
const valid = require("./middlewares/validate");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(bodyParser.json());

app.get("/authors", rescue(Author.getAll));
app.get("/authors/:id", rescue(Author.findById));
app.post("/authors", valid.getIsValidInfos, rescue(Author.createAuthor));

app.use(errorMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
