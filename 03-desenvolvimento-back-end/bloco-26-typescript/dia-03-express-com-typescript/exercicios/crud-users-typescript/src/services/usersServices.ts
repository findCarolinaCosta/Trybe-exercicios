import connection from '../models/connection';
import UserModel from '../models/usersModels';
import IUser from '../interfaces/userInterface';
import { NotFoundError } from 'restify-errors';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<IUser[]> {
    const users = await this.model.getAll();
    return users;
  }

  public async getById(id: number): Promise<IUser> {
    const user = await this.model.getById(id);
    return user;
  }

  public create(user: IUser): Promise<IUser | null> {
    return this.model.create(user);
  }

  public async update(id: number, user: IUser): Promise<void> {
    const userFound = await this.model.getById(id);

    if (!userFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, user);
  }
}