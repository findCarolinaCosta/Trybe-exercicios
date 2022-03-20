const bodyParser = require('body-parser');
const Route = require('./src/routers')

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', Route.patient);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});