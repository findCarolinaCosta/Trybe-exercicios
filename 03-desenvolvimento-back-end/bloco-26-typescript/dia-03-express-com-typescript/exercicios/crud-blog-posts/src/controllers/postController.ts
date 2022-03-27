import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import PostService from '../services/postService';

export default class PostController {
  constructor(private postService = new PostService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const posts = await this.postService.getAll();
    return res.status(StatusCodes.OK).json(posts);
  };


  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const post = await this.postService.getById(id);

    if (!post) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'post not found!'});
    }

    return res.status(StatusCodes.OK).json(post);
  }

  public create = async (req: Request, res: Response) => {
    const post = req.body;

    const postCreated = await this.postService.create(post);

    return res.status(StatusCodes.CREATED).json(postCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const post = req.body;

    await this.postService.update(id, post);

    return res.status(StatusCodes.NO_CONTENT).end();
  };

  public destroy = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await this.postService.destroy(id);

    return res.status(StatusCodes.OK).json({ message: 'Post deleted successfully' });
  };

  public getSearchTerm = async (req: Request, res: Response) => {
    const q: string = req.query.q as string;

    if (!q) {
      return res.status(StatusCodes.BAD_REQUEST).send(
        'Select query params valid options: author, category or creation date');
    }

    const posts = await this.postService.getSearchTerm(q);
    
    return res.status(StatusCodes.OK).json(posts);
  }
}