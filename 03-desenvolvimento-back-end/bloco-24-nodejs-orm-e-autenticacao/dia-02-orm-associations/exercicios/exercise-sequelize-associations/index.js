const bodyParser = require('body-parser');
const Routes = require('./src/routers');

const express = require('express');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/patients', Routes.patient);

app.use('/plan', Routes.plan);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});