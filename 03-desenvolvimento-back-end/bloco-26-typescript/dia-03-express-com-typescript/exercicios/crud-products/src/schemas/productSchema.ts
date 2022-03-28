import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

export const productSchema = Joi.object({
  brandName: Joi.string().min(3).required().messages({
    // status code | message 
    'string.min': `${StatusCodes.BAD_REQUEST}|{{#label}} length must be at least {{#limit}} characters long`,
  }),
  price: Joi.number().min(0).required().messages({
    // status code | message
    'number.base': `${StatusCodes.BAD_REQUEST}|{{#label}} must be a number`,
    'number.min': `${StatusCodes.BAD_REQUEST}|{{#label}} must be a number greater than {{#limit}}`,
  }),
  manufacturingDate: Joi.date().messages({
    // status code | message 
    "date.base": `${StatusCodes.BAD_REQUEST}|{{#label}} must have the expected valid format: YYYY-MM-DD`
  }),
  expirationDate: Joi.date().messages({
    // status code | message 
    "date.base": `${StatusCodes.BAD_REQUEST}|{{#label}} must have the expected valid format: YYYY-MM-DD`
  }),
});

export const queryParamsSchema = Joi.object({
  initial: Joi.number().min(0).messages({
    // status code | message
    'number.min': `${StatusCodes.BAD_REQUEST}|{{#label}} must be a number greater than {{#limit}}`,
  }),
  final: Joi.number().min(0).messages({
    // status code | message
    'number.min': `${StatusCodes.BAD_REQUEST}|{{#label}} must be a number greater than {{#limit}}`,
  })
});