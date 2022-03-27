import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

const userSchema = Joi.object({
  email: Joi.string().email().required().messages({
    // status code | message 
    "string.email": `${StatusCodes.BAD_REQUEST}| O email deve possuir um formato de email válido: email@email.com`
  }),
  name: Joi.string().min(3).required().messages({
    // status code | message 
    'string.min': `${StatusCodes.BAD_REQUEST}|"name" length must be at least {{#limit}} characters long`,
  }),
  password: Joi.string().min(6).max(12).required().messages({
    // status code | message 
    'string.min': `${StatusCodes.BAD_REQUEST}|{{#label}} length must be at least {{#limit}} characters long`,
    'string.max': `${StatusCodes.BAD_REQUEST}|{{#label}} length must be the maximum of {{#limit}} characters long`,
  })
});

export default userSchema;