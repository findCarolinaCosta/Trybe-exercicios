const Joi = require("joi");

module.exports = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
}).messages({
  "any.required": "O campo {{#label}} é obrigatório",
  "string.min":
    "O campo {{#label}} deve ter, pelo menos, {{#limit}} caracteres",
  "string.email": "Informe um email válido no campo {{#label}}",
});
