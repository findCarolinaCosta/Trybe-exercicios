import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/userInterface';

export default class UserModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IUser[]> {
    const [users] = await this.connection
      .execute('SELECT * FROM Users.user;');
    return users as IUser[];
  }

  public async getById(id: number): Promise<IUser> {
    const [result] = await this.connection
      .execute('SELECT * FROM Users.user WHERE id=?;', [id]);
      
    const [user] = result as IUser[];
    return user;
  }

  public async create(user: IUser): Promise<IUser | null> {
    const { name, password, email } = user;
    const SELECTBYEMAIL = 'SELECT email FROM Users.user WHERE email = ?';
    const [checkEmail] = await this.connection.execute(SELECTBYEMAIL, [email]);
    

    if (!checkEmail) return null;

    const INSERTUSER = 'INSERT INTO Users.user (name, password, email) VALUES (?, ?, ?);'
    const [result] = await this.connection.execute<ResultSetHeader>(INSERTUSER, [ name, password, email]);
    const { insertId } = result;
    return { id: insertId, ...user };
  }

  public async update(id: number, user: IUser) {
    const { name, password, email } = user;
    await this.connection.execute(
      'UPDATE Users.user SET name=?, password=?, email=? WHERE id=?;',
      [name, password, email, id]
    );
  }
  
  public async destroy(id: number) {
    await this.connection.execute(
      'DELETE FROM Users.user WHERE id=?',
      [id],
    );
  }
}