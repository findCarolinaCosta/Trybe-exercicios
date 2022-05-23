import { model as createModel } from "mongoose";
import { BookSchema, IBook } from "../schemas/BookSchema";

export class BookModel {
  constructor(private bookModel = createModel<IBook>("books", BookSchema)) {}

  public async getBooks(): Promise<IBook[]> {
    const books = await this.bookModel.find();
    return books;
  }
}
