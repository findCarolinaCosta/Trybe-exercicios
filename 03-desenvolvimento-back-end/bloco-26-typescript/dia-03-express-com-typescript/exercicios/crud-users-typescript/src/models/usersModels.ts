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
}