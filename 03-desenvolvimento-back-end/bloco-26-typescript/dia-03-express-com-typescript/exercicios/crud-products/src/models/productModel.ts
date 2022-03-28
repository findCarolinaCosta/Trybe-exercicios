import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import IPRODUCT from '../interfaces/productInterface';

export default class ProductModel {
  constructor(public connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IPRODUCT[]> {
    const [products] = await this.connection
      .execute('SELECT id, `name`, brand_name, price, DATE(manufacturing_date) as manufacturing_date, DATE(expiration_date) as expiration_date FROM products_manager.product;');
    return products as IPRODUCT[];
  }

  public async getById(id: number): Promise<IPRODUCT> {
    const [result] = await this.connection
      .execute('SELECT id, `name`, brand_name, price, DATE(manufacturing_date) as manufacturing_date, DATE(expiration_date) as expiration_date FROM products_manager.product WHERE id=?;', [id]);
      const [product] = result as IPRODUCT[];
    return product;
  }

  public async create(product: IPRODUCT): Promise<number> {
    const { name, brandName, price, manufacturingDate, expirationDate } = product;
    const INSERTPRODUCT = 'INSERT INTO products_manager.product (`name`, brand_name, price,manufacturing_date, expiration_date) VALUES (?, ?, ?, ?, ?);';
    const arrayDependencies = [name, brandName, price, manufacturingDate, expirationDate]
    const [result] = await this.connection.execute<ResultSetHeader>(INSERTPRODUCT, arrayDependencies);
    const { insertId } = result;
    return insertId;
  }

  public async update(id: number, product: IPRODUCT, essential: boolean | string) {
    const { name, brandName, price, manufacturingDate, expirationDate } = product;
    
    const UPDATE = essential === "true" ? `UPDATE products_manager.product as p SET p.name=?, brand_name=?, price=?, manufacturing_date=?, expiration_date=? WHERE id=?;` : `UPDATE products_manager.product as p SET p.name=?, brand_name=?, price=? WHERE id=?;`;
    const arrayDependencies = essential ? [name, brandName, price, manufacturingDate, expirationDate, id] : [name, brandName, price, id]
    await this.connection.execute(UPDATE, arrayDependencies);
  }
  
  public async destroy(id: number) {
    await this.connection.execute(
      'DELETE FROM products_manager.product WHERE id=?',
      [id],
    );
  }

  public async getFilterByPrice(initial: string, final: string) {
    const SELECTBYFILTER = `SELECT id, p.name, brand_name, price, DATE(manufacturing_date) as manufacturing_date, 
DATE(expiration_date) as expiration_date FROM products_manager.product as p WHERE price BETWEEN ? AND ?;`
    const [result] = await this.connection.execute<RowDataPacket[]>(SELECTBYFILTER, [initial, final]);
    return result;
  }

  public async getUnexpiredProducts(): Promise<IPRODUCT[]> {
    const SELECTUNEXPIRED = `SELECT id, p.name, brand_name, price, DATE(manufacturing_date) as manufacturing_date, DATE(expiration_date) as expiration_date FROM products_manager.product as p
    WHERE
        expiration_date > DATE(now());`;
    const [products] = await this.connection.execute(SELECTUNEXPIRED);
    return products as IPRODUCT[];
  }
}