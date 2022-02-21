const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const controller = require("./controller");
const { validCode } = require("./middleware/validCode");
const ZipCode = require("./controller/zipCode");
const middleware = require("./middleware");

app.get("/ping", controller.ping);
app.get("/cep/:cep", validCode, ZipCode.getZipCode);

/* Parei no 3. Crie o endpoint POST /cep */

app.use(middleware.error);

app.listen(port, () =>
  console.log("> Server is up and running on port : " + port)
);
