const Book = require("../controllers/Book");

async function isValidBook(req, res, next) {
  const { title, authorId } = req.body;

  if (!title || typeof title !== "string" || title.length < 3)
    return res.status(400).json({ message: "Dados inválidos" });
  if (
    !authorId ||
    typeof authorId !== "number" ||
    !(await Book.getIsValid(authorId))
  )
    return res.status(400).json({ message: "Dados inválidos" });

  return next();
}

async function isValidAuthor(req, res, next) {
  const { firstName, middleName, lastName } = req.body;
  if (!firstName || typeof firstName !== "string") {
    return res.status(400).json({ message: "Dados inválidos" });
  }
  if (!lastName || typeof lastName !== "string") {
    return res.status(400).json({ message: "Dados inválidos" });
  }
  if (middleName && typeof middleName !== "string") {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  return next();
}

module.exports = {
  isValidBook,
  isValidAuthor,
};
