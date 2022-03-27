import connection from '../models/connection';
import PostModel from '../models/postModel';
import IPOST from '../interfaces/postInterface';
import { NotFoundError } from 'restify-errors';
import {  RowDataPacket } from 'mysql2/promise';


const serialize = (post: RowDataPacket | any) => {
  let [date] = JSON.stringify(post.created_at).split('T');
  date = date.slice(1);
  return ({
    id: post.id,
    authorName: post.author_name,
    title: post.title,
    category: post.category,
    createdAt: date
  });
}

export default class PostService {
  public model: PostModel;

  constructor() {
    this.model = new PostModel(connection);
  }

  public async getAll(): Promise<IPOST[]> {
    const posts = await this.model.getAll();
    return posts.map(serialize);
  }

  public async getById(id: number): Promise<IPOST> {
    const post = await this.model.getById(id);    
    return serialize(post);
  }

  public async create(post: IPOST): Promise<IPOST | null> {
    const id = await this.model.create(post);
    
    return serialize(await this.model.getById(id));
  }

  public async update(id: number, post: IPOST): Promise<void> {
    const postFound = await this.model.getById(id);

    if (!postFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, post);
  }

  public async destroy(id: number): Promise<void> {
    const postFound = await this.model.getById(id);

    if (!postFound) {
      throw new NotFoundError('NotFoundError');
    }

    await this.model.destroy(id);
  }

  public async getSearchTerm(q: string): Promise<IPOST[]> {
    const result = await this.model.getSearchTerm(q);

    return result.map(serialize);
  }
}