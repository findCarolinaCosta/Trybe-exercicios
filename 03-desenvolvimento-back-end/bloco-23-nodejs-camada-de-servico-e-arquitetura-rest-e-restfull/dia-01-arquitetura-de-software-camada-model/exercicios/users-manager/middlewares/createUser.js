const userModel = require("../models/User");
const rescue = require("express-rescue");

module.exports = [
  (req, _res, next) => {
    const { error } = userModel.isValid(req.body);

    if (error) return next(error);

    next();
  },
  rescue(async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;
    if (!userModel.isValid({ firstName, lastName, email, password })) {
      const err = new Error("Invalid data");
      err.status = 400;
      return next(err);
    }
    const newUser = await userModel.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).json(newUser);
  }),
];
