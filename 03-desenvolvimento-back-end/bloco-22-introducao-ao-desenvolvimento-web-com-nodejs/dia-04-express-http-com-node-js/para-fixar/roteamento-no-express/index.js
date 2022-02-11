const express = require("express");
const app = express();

/* Rota com caminho '/', utilizando o método GET */
app.get("/", function (_req, res) {
  res.send(
    "hello world" //Fixando que o método get é o que aparece na para o usuário
  );
});

/* Rota com caminho '/', utilizando o método POST */
app.post("/", function (_req, res) {
  res.send("hello world"); // post adiciona dados no servidor
});

/* Rota com caminho '/', utilizando o método PUT */
app.put("/", function (_req, res) {
  res.send("hello world"); // atualiza registros do lado servidor
});

/* Rota com caminho '/', utilizando o método DELETE */
app.delete("/", function (_req, res) {
  res.send("hello world"); // exclui dados do lado servidor
});

/* Rota com caminho '/' para qualquer método HTTP 
É chamado em resposta a qualquer método*/
app.all("/", function (_req, res) {
  res.send("hello world");
});

/* Ou podemos encadear as requisições para evitar repetir o caminho */
app
  .route("/")
  .get(function (_req, res) {
    // Requisições para rota GET `/` são resolvidas aqui!
    res.send("hello world get");
  })
  .post(function (_req, res) {
    // Requisições para rota POST `/` são resolvidas aqui!
    res.send("hello world post");
  });

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
