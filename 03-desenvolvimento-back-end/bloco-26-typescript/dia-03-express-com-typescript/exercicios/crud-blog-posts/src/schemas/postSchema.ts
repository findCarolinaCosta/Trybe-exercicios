import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';

const postSchema = Joi.object({
  authorName: Joi.string().min(3).required().messages({
    // status code | message 
    'string.min': `${StatusCodes.BAD_REQUEST}|{{#label}} length must be at least {{#limit}} characters long`,
  }),
  category: Joi.string().min(3).required().messages({
    // status code | message 
    'string.min': `${StatusCodes.BAD_REQUEST}|{{#label}} length must be at least {{#limit}} characters long`,
  }),
  createdAt: Joi.date().messages({
    "date.base": `${StatusCodes.BAD_REQUEST}|{{#label}} must have the expected valid format: YYYY-MM-DD`
  }),
});

export default postSchema;