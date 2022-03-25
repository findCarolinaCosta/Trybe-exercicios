import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/usersServices';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const books = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(books);
  };

}