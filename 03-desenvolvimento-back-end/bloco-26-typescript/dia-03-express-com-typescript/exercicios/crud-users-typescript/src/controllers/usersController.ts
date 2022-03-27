import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/usersServices';

export default class UserController {
  constructor(private userService = new UserService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(StatusCodes.OK).json(users);
  };


  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const user = await this.userService.getById(id);

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'User not found!'});
    }

    return res.status(StatusCodes.OK).json(user);
  }

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);

    if (!userCreated) return res.status(StatusCodes.NOT_ACCEPTABLE).json({ error: 'There is already a registration with this email' })

    return res.status(StatusCodes.CREATED).json(userCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const user = req.body;
    await this.userService.update(id, user);

    res.status(StatusCodes.NO_CONTENT).end();
  };
}