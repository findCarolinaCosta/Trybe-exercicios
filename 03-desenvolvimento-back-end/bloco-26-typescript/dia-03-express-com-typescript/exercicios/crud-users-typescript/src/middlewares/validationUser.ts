import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import IUSER from '../interfaces/userInterface';
import userSchema from '../schemas/userSchema';

const properties = ['name', 'password', 'email'];

function validateProperties(user: IUSER): [boolean, string | null] {
  for (let i = 0; i < properties.length; i += 1) {
    if (!Object.prototype.hasOwnProperty.call(user, properties[i])) {
      return [false, properties[i]];
    }
  }
  return [true, null];
}

function validateValues(user: IUSER): [boolean, string | null] {
  const entries = Object.entries(user);
  for (let i = 0; i < entries.length; i += 1) {
    const [property, value] = entries[i];
    if (!value) {
      return [false, property];
    }
  }
  return [true, null];
}

function validationUser(req: Request, res: Response, next: NextFunction) {
  const user: IUSER = req.body;
  let [valid, property] = validateProperties(user);
  const { email } = req.body;
  const {error} = userSchema.validate(email);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} é obrigatório.`,
    );
  }

  [valid, property] = validateValues(user);

  if (!valid) {
    return res.status(StatusCodes.BAD_REQUEST).send(
      `O campo ${property} não pode ser nulo ou vazio.`,
    );
  }

  if (error) {
    return res.status(StatusCodes.BAD_REQUEST).json({
     message: 'O email deve possuir um formato de email válido: email@email.com',
    });
  }

  next();
}

export default validationUser;