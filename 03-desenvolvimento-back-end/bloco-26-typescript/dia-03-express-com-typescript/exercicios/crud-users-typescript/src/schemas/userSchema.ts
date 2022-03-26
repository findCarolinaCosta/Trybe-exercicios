import Joi from 'joi';

const userSchema = Joi.object({
  email: Joi.string().email()
});

export default userSchema;