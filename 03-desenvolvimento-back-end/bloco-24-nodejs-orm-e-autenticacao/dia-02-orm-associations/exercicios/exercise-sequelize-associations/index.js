require('dotenv').config();
const express = require('express');


const Routes = require('./src/routers');

const PORT = process.env.API_PORT || 3000;

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/patients', Routes.patient);
app.use('/plan', Routes.plan);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
}); 