require("dotenv").config();
const jwt = require("jsonwebtoken");
const { JWT_KEY } = process.env;

const { User } = require("../models");

module.exports = async (req, res, next) => {
  try {
    if (!JWT_KEY) {
      console.error("JWT_KEY não foi definido no .env");
      throw Error;
    }
    const { authorization } = req.headers;

    if (!authorization)
      return res.status(400).json({
        message: "Token não encontrado ou informado",
      });

    const { id } = jwt.verify(authorization, JWT_KEY);

    const user = await User.findOne({ where: { id } });

    if (!authorization || !id || !user) throw Error;

    if (req.param && req.params.id && Number(id) !== Number(req.params.id))
      return res.status(401).json({
        message: "Acesso negado",
      });

    next();
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Erro ao acessar o endpoint",
      error: "É necessário um token válido para acessar esse endpoint",
    });
  }
};
