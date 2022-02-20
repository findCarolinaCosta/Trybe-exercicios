const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const middlewares = require("./middlewares");

app.use(bodyParser.json());

app.route("/user").post(middlewares.createUser).get(middlewares.getAllUsers);

app
  .route("/user/:id")
  .get(middlewares.findUserById)
  .put(middlewares.updateUser);

app.use(middlewares.error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log("> Server is up and running on port : " + PORT)
);
