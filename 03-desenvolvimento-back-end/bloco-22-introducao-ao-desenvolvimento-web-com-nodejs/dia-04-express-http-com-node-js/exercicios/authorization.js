const express = require("express");
const auth = require("./auth");
const generateToken = require("./generateToken");
const app = express();

app.use(express.json());

app.post("/signup", (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: "missing fields" });
  }

  const token = generateToken();

  res.status(200).json({ token });
});

app.use(auth);

// Middleware de erro
app.use(function (err, _req, res, _next) {
  res.status(500).send(`Algo deu errado! Mensagem: ${err.message}`);
});

app.listen(3001, () => console.log("porta 3001"));
