const rescue = require("express-rescue");
const User = require("../models/User");

module.exports = [
  (req, _res, next) => {
    const { error } = User.isValid(req.body);

    if (error) return next(error);

    next();
  },
  rescue(async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const updateUser = await User.updateUser({
      id,
      firstName,
      lastName,
      email,
      password,
    });

    if (!updateUser) {
      return res
        .status(404)
        .json({ error: true, message: "Usuário não encontrado" });
    }

    return res.status(200).json(updateUser);
  }),
];
