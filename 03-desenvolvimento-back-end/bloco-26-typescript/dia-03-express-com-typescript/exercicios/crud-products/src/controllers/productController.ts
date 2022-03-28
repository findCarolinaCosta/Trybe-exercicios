import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';

export default class ProductController {
  constructor(private postService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response) => {
    const products = await this.postService.getAll();
    return res.status(StatusCodes.OK).json(products);
  };


  public getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = await this.postService.getById(id);

    if (!product) {
      return res.status(StatusCodes.NOT_FOUND)
        .json({ message: 'product not found!'});
    }

    return res.status(StatusCodes.OK).json(product);
  }

  public create = async (req: Request, res: Response) => {
    const product = req.body;

    const postCreated = await this.postService.create(product);

    return res.status(StatusCodes.CREATED).json(postCreated);
  };

  public update = async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const product = req.body;
    const essential: boolean | string = req.query.essential as boolean | string;

    await this.postService.update(id, product, essential);

    return res.status(StatusCodes.NO_CONTENT).end();
  };

  public destroy = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    await this.postService.destroy(id);

    return res.status(StatusCodes.OK).json({ message: 'product deleted successfully' });
  };

  public getFilterByPrice = async (req: Request, res: Response) => {
    const initial: string = req.query.initial as string;
    const final: string = req.query.final as string;

    const products = await this.postService.getFilterByPrice(initial, final);
    
    return res.status(StatusCodes.OK).json(products);
  }

  public getUnexpiredProducts = async (req: Request, res: Response) => {
    const products = await this.postService.getUnexpiredProducts();
    return res.status(StatusCodes.OK).json(products);
  }
}