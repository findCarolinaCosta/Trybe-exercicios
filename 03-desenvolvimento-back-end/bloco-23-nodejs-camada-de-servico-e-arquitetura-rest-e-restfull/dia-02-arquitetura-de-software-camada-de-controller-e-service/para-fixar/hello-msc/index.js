const express = require("express");
const bodyParser = require("body-parser");

const Author = require("./controllers/Authors");
const valid = require("./middlewares/validate");

const app = express();

app.use(bodyParser.json());

app.get("/authors", Author.getAll);

app.get("/authors/:id", Author.findById);

app.post("/authors", valid.getIsValidInfos, Author.createAuthor);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
