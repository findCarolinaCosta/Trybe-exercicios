import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IPOST from '../interfaces/postInterface';

export default class PostModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IPOST[]> {
    const [posts] = await this.connection
      .execute('SELECT * FROM blog.post;');
    return posts as IPOST[];
  }

  public async getById(id: number): Promise<IPOST> {
    const [result] = await this.connection
      .execute('SELECT id, author_name, title, category, DATE(created_at) as created_at FROM blog.post WHERE id=?;', [id]);
      const [post] = result as IPOST[];
    return post;
  }

  public async create(post: IPOST): Promise<number> {
    const { authorName: author_name, title, category , createdAt} = post;
    const INSERTPOST = createdAt ? 'INSERT INTO blog.post (author_name, title, category, created_at) VALUES (?, ?, ?, ?);' 
      : 'INSERT INTO blog.post (author_name, title, category) VALUES (?, ?, ?);';
    const arrayDependencies = createdAt ? [ author_name, title, category, createdAt] : [ author_name, title, category]
    const [result] = await this.connection.execute<ResultSetHeader>(INSERTPOST, arrayDependencies);
    const { insertId } = result;
    return insertId;
  }

  public async update(id: number, post: IPOST) {
    const { authorName, title, category } = post;   
    const UPDATE = 'UPDATE blog.post SET author_name=?, title=?, category=? WHERE id=?;';
    await this.connection.execute(UPDATE, [authorName, title, category, id]);
  }
  
  public async destroy(id: number) {
    await this.connection.execute(
      'DELETE FROM blog.post WHERE id=?',
      [id],
    );
  }

  public async getSearchTerm(q: string) {    
    const SELECTBYFILTER = `SELECT * FROM blog.post 
WHERE (post.author_name LIKE ? OR post.category LIKE ? OR post.created_at LIKE ?);`
    const [result] = await this.connection.execute<RowDataPacket[]>(SELECTBYFILTER, [`%${q}%`, `%${q}%`, `%${q}%`]);
    return result;
  }
}