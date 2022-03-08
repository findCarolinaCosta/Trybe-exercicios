const express = require('express');
const bodyParser = require('body-parser');

const BooksController = require('./src/controllers/booksController');
const AuthorController = require('./src/controllers/authorController'); 

const app = express();

app.use(bodyParser.json());

app.get('/books', BooksController.getAll);
app.get('/book/:id', BooksController.getById);
app.get('/author/:name', AuthorController.getByAuthorName);
app.post('/book', BooksController.create);
app.post('/book/:id', BooksController.updateById);
app.delete('/book/:id', BooksController.deleteById);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));