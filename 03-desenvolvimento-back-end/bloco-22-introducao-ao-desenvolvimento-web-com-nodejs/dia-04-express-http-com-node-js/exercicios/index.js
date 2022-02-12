const express = require("express");
const bodyParse = require("body-parser");
const app = express();
const {
  readSimpsonsFile,
  writeSimpsonsFile,
} = require("./manipulateSimpsonsFile");

app.use(bodyParse.json());

app.get("/ping", (_req, res) => res.status(200).json({ message: "pong" }));

app.post("/hello", (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;

  if (typeof age !== "number") {
    return res.status(401).send(`Age is expected to be a number.
Verified request syntax example: '&&age:=10'`);
  }

  if (age <= 17) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  return res.status(200).json({ message: `Hello, ${name}!` });
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;

  return res
    .status(200)
    .json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
});

app.get("/simpsons", async (_req, res, next) => {
  try {
    const simpsons = await readSimpsonsFile();

    return res.status(200).json(simpsons);
  } catch (e) {
    next(e);
  }
});

app.get("/simpsons/:id", async (req, res, next) => {
  try {
    const simpsons = await readSimpsonsFile();

    const simpson = simpsons.find(({ id }) => id === req.params.id);

    if (!simpson) {
      return res.status(404).json({ message: "simpson not found" });
    }

    return res.status(202).json(simpson);
  } catch (e) {
    next(e);
  }
});

app.post("/simpsons", async (req, res, next) => {
  try {
    const { id, name } = req.body;
    const simpsons = await readSimpsonsFile();
    const checkIdExists = simpsons.map(({ id }) => id).includes(id);

    if (checkIdExists) {
      return res.status(409).json({ message: "id already exists" });
    }

    simpsons.push({ id, name });

    await writeSimpsonsFile(simpsons);

    return res.status(201).end();
  } catch (e) {
    next(e);
  }
});

// Middleware de erro
app.use((err, _req, res, _next) => {
  res.status(500).send(err.message);
});

app.listen(3001, () => console.log("porta 3001"));
