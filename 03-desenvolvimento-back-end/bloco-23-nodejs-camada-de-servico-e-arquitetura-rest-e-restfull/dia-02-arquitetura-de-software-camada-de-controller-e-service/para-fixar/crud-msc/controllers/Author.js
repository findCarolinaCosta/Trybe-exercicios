const Author = require("../services/Author");

async function getAll(_req, res) {
  try {
    const authors = await Author.getAll();

    return res.status(200).json(authors);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function findById(req, res, next) {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);

    if (!author) return res.status(404).json({ message: "Author not found" });

    return res.status(200).json(author);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

async function create(req, res, next) {
  try {
    const { firstName, middleName, lastName } = req.body;

    const author = await Author.create({ firstName, middleName, lastName });

    if (!author) {
      return res.status(409).json({ message: "Autor já existe" });
    }

    return res.status(201).json({ message: "Autor criado com sucesso! " });
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = {
  getAll,
  findById,
  create,
};
