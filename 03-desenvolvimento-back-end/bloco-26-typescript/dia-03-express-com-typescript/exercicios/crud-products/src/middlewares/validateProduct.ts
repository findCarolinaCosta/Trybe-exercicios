import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IPRODUCT from '../interfaces/productInterface';
import {productSchema, queryParamsSchema} from '../schemas/productSchema';

const properties = ['name', 'brandName', 'price'];

function validateProperties(product: IPRODUCT): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(product, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(product: IPRODUCT): [boolean, string | null] {
  const entries = Object.entries(product);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validatePost(req: Request, res: Response, next: NextFunction) {
  const product: IPRODUCT = req.body;
  const essential: boolean | string = req.query.essential as boolean | string;
  const initial: number =  parseInt(req.query.initial as string);
  const final: number = parseInt(req.query.final as string);
  const { brandName, price, manufacturingDate, expirationDate } = product;
  let [valid, property] = validateProperties(product);
  const objectToValidate = essential ? { brandName, price, manufacturingDate, expirationDate } 
    : { brandName, price };
  
  const {error} = productSchema.validate(objectToValidate);
  const errorQuery = queryParamsSchema.validate({initial, final});

  if (!valid && !manufacturingDate && !expirationDate) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(product);

  if (!valid && !manufacturingDate && !expirationDate) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }
  

  if (!initial || !final) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      'Send via query params an initial and final price like: initial and final greater than 0');
  }
  
  if (initial && errorQuery.error) { 
    const [code, message] = errorQuery.error.message.split('|');
    return res.status(Number(code)).json({ message });
  }

  if (final && errorQuery.error) { 
    const [code, message] = errorQuery.error.message.split('|');
    return res.status(Number(code)).json({ message });
  }

  next();
}

export default validatePost;