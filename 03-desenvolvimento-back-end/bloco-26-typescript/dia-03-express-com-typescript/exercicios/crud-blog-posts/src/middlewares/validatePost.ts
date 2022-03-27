import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IPOST from '../interfaces/postInterface';
import postSchema from '../schemas/postSchema';

const properties = ['authorName', 'title', 'category'];

function validateProperties(post: IPOST): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(post, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(post: IPOST): [boolean, string | null] {
  const entries = Object.entries(post);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validatePost(req: Request, res: Response, next: NextFunction) {
  const post: IPOST = req.body;
  const { authorName, category, createdAt } = post;
  let [valid, property] = validateProperties(post);
  
  const {error} = postSchema.validate({ authorName, category, createdAt });

  if (!valid && !createdAt) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(post);

  if (!valid && !createdAt) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  if (error) {
    const [code, message] = error.message.split('|');
    return res.status(Number(code)).json({ message });
  }

  next();
}

export default validatePost;