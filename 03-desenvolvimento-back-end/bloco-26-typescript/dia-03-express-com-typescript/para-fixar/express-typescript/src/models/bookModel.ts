import { Pool, ResultSetHeader } from 'mysql2/promise';
import Book from '../interfaces/bookInterface';

export default class BookModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection
      .execute('SELECT * FROM books_api.books');
    const [rows] = result;
    return rows as Book[];
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const INSERTBOOK = 'INSERT INTO books_api.books (title, price, author, isbn) VALUES (?, ?, ?, ?)'
    const result = await this.connection.execute<ResultSetHeader>(INSERTBOOK, [title, price, author, isbn]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}