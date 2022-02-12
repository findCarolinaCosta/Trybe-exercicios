const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/validateToken", function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16)
    return res.status(401).json({ message: "Invalid Token!" });

  res.status(200).json({ message: "Valid Token!" });
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
