const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Água Mineral 500 ml", price: 5.0 },
];

const orderedList = drinks.sort((a, b) => a.name.localeCompare(b.name));

app.get("/drinks", function (_req, res) {
  res.status(200).json(orderedList);
});

app.get("/drinks/search", function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredDrinks = drinks.filter(
    (r) =>
      r.name.includes(name) &&
      r.price < parseInt(maxPrice) &&
      r.price >= minPrice
  );
  res.status(200).json(filteredDrinks);
});

app.get("/drinks/:id", (req, res) => {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: "Drink not found!" });

  res.status(200).json(drink);
});

app.post("/drinks", (req, res) => {
  const { id, name, price } = req.body;
  drinks.push({ id, name, price });
  res.status(200).json({ menssage: "Drink created successfully" });
});

app.put("/drinks/:id", function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1)
    return res.status(404).json({ message: "Drink not found!" });

  drinks[drinkIndex] = { ...drinks[drinkIndex], name, price };

  res.status(204).end();
});

app.delete("/drinks/:id", function (req, res) {
  const { id } = req.params;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if (drinkIndex === -1)
    return res.status(404).json({ message: "Drink not found!" });

  drinks.splice(drinkIndex, 1);

  res.status(204).end();
});

app.all("*", function (req, res) {
  return res.status(404).json({ message: `Rota '${req.path}' não existe!` });
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
