const express = require("express");
const app = express();
// const cors = require("cors");
const bodyParser = require("body-parser");

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

// app.use(cors());
app.use(bodyParser.json());

app.get("/recipes/search", function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < parseInt(maxPrice) &&
      r.price >= minPrice
  );
  res.status(200).json(filteredRecipes);
});

app.get("/recipes/search", function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});

app.get("/recipes/:id", (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: "Recipe not found!" });

  res.status(200).json(recipe);
});

app.get("/recipes", function (_req, res) {
  return res.json(recipes);
});

app.post("/recipes", function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: "Recipe created successfully!" });
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
