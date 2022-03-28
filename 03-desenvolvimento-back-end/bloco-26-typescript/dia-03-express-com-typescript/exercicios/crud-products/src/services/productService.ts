import connection from '../models/connection';
import ProductModel from '../models/productModel';
import IPRODUCT from '../interfaces/productInterface';
import errors, { NotFoundError } from 'restify-errors';
import {  RowDataPacket } from 'mysql2/promise';
import { StatusCodes } from 'http-status-codes';



const serialize = (product: RowDataPacket | any) => {
  let [manufacturingDate] = JSON.stringify(product.manufacturing_date).split('T');
  let [expirationDate] = JSON.stringify(product.expiration_date).split('T');
  manufacturingDate = manufacturingDate.slice(1);
  expirationDate = expirationDate.slice(1);
  return ({
    id: product.id,
    name: product.name,
    brandName: product.brand_name,
    price: product.price,
    manufacturingDate,
    expirationDate,
  });
}

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<IPRODUCT[]> {
    const products = await this.model.getAll();
    return products.map(serialize);
  }

  public async getById(id: number): Promise<IPRODUCT> {
    const product = await this.model.getById(id);    
    return serialize(product);
  }

  public async create(product: IPRODUCT): Promise<IPRODUCT | null> {
    if (product.manufacturingDate === product.expirationDate) {
      throw new errors.NotAcceptableError({
        statusCode: StatusCodes.CONFLICT
      }, 'The manufacturing date cannot be the same as the expiration date');
    }

    const id = await this.model.create(product);
    
    return serialize(await this.model.getById(id));
  }

  public async update(id: number, product: IPRODUCT, essential: boolean | string): Promise<void> {
    const productFound = await this.model.getById(id);

    if (!productFound) {
      throw new NotFoundError('NotFoundError');
    }

    return this.model.update(id, product, essential);
  }

  public async destroy(id: number): Promise<void> {
    const productFound = await this.model.getById(id);

    if (!productFound) {
      throw new NotFoundError('NotFoundError');
    }

    await this.model.destroy(id);
  }

  public async getFilterByPrice(initial: string, final: string): Promise<IPRODUCT[]> {
    const result = await this.model.getFilterByPrice(initial, final);

    return result.map(serialize);
  }

  public async getUnexpiredProducts(): Promise<IPRODUCT[]> {
    const products = await this.model.getUnexpiredProducts();
    return products.map(serialize);
  }
}