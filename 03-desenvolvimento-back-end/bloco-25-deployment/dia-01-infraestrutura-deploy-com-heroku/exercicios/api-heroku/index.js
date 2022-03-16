const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const MY_VARIABLE_CUSTOM = process.env.MY_VARIABLE_CUSTOM || "Don't work";

app.get('/', (_req, res) => {
  res.json(MY_VARIABLE_CUSTOM)
});

app.listen(PORT, () => {
  console.log(`Ouvindo na ${PORT}`);
});