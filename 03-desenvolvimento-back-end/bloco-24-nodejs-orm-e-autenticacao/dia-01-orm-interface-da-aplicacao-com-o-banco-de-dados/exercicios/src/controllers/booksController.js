const { Book } = require('../models');

const getAll = async (_req, res) => {
  try {
    const books = await Book.findAll();

    if (!books) {
      return res.status(404).json({ message: 'No books found!' })
    }

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await Book.findByPk(id);

    if (!books) {
      return res.status(404).json({ message: 'Book not found' })
    }

    return res.status(200).json(books);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
}

const create = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;

    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });

    return res.status(201).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
}

const updateById = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const book = await Book.findByPk(id);
    
    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }

    const result = await Book.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    return res.status(200).json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).end();
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' })
    }
    
    await book.destroy();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    res.status(500).end();
  }
};

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}