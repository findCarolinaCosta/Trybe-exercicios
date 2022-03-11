const { User } = require('../models');

module.exports = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const user = await User.findOne({ where: { id } });

    if (!user) throw Error;

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
};