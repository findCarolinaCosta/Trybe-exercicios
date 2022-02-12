const express = require("express");
const bodyParse = require("body-parser");

const app = express();

app.use(bodyParse.json());

// Middleware de erro
app.use((err, _req, res, _next) => {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3000, () => console.log("ouvindo na porta 3000!"));
