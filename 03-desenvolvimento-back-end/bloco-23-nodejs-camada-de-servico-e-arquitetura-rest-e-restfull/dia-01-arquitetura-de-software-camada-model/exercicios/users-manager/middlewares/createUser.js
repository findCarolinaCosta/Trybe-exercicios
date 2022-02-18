const userModel = require("../models/User");

module.exports = async (req, res, next) => {
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
};
