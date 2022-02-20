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

async function update(req, res, next) {
  try {
    const { firstName, middleName, lastName, birthday, nationality } = req.body;
    const { id } = req.params;

    const author = await Author.update({
      id,
      firstName,
      middleName,
      lastName,
      birthday: birthday === "" && null,
      nationality: nationality === "" && null,
    });

    if (!author) {
      return res
        .status(404)
        .json({ error: true, message: "Livro não encontrado" });
    }

    return res.status(200).json(author);
  } catch (error) {
    console.log(error);
    next(error);
  }
}

async function deleteAuthor(req, res, next) {
  try {
    const { id } = req.params;

    const author = await Author.findById(id);

    if (!author) {
      return res
        .status(404)
        .json({ error: true, message: "Author não encontrado" });
    }

    await Author.deleteAuthor(id);

    return res.status(204).end();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = {
  getAll,
  findById,
  create,
  update,
  deleteAuthor,
};
