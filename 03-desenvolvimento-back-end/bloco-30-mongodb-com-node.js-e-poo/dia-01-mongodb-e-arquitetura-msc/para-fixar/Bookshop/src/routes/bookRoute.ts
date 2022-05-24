import { Router } from "express";

import BookController from "../controllers/BookController";

const bookController = new BookController();
export const routes = Router();

const booksId = "/book/:id";

routes.get("/books", bookController.getBooks);
routes.post("/books", bookController.create);
routes.put(booksId, bookController.updateBook);
routes.delete(booksId, bookController.deleteBook);
routes.get(booksId, bookController.getBook);
