import { Pool } from 'mysql2/promise';
import User from '../interfaces/userInterface';

export default class UserModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<User[]> {
    const [users] = await this.connection
      .execute('SELECT * FROM Users.user');

    return users as User[];
  }

  public async getById(id: number): Promise<User> {
    const [result] = await this.connection
      .execute('SELECT * FROM books_api.books WHERE id=?', [id]);
      
    const [user] = result as User[];
    return user;
  }
}