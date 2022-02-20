const rescue = require("express-rescue");
const User = require("../models/User");

module.exports = rescue(async (_req, res) => {
  const users = await User.findAll();

  res.status(200).json(users);
});
