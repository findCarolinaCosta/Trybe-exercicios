import { Pool, RowDataPacket, ResultSetHeader } from "mysql2/promise";

export interface Book {
  id?: number,
  title: string, 
  price: number,
  author: string,
  isbn: string,
}


export default class BookModel {
  private connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Book[]> {
    const result = await this.connection.execute<RowDataPacket[]>('SELECT * FROM books');
    const [rows] = result;
    return rows as Book[]; // porque é uma função assíncrona e o  o retorno é uma Promise
  }

  public async create(book: Book): Promise<Book> {
    const { title, price, author, isbn } = book;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...book };
  }
}