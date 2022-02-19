const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const middlewares = require("./middlewares");

app.use(bodyParser.json());

app.post("/user", middlewares.createUser);
app.get("/user", middlewares.getAllUsers);
app.get("/user/:id", middlewares.findUserById);

app.use(middlewares.error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log("> Server is up and running on port : " + PORT)
);
