const { Post } = require('../models');

module.exports = async (req, res) => {
  const { id } = req.user.dataValues;
  const posts = await Post.findOne({
      where: {id},
      attributes: { exclude: 'id' } 
      });

  return res.status(200).json({ mockPosts: posts });
};
