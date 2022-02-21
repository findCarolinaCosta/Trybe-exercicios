function validCode(req, res, next) {
  const { cep } = req.params;

  const validate = /\d{5}-\d{3}/;
  if (!validate.test(cep)) {
    return res.status(404).send({
      error: {
        code: "invalidData",
        message: "CEP inválido",
      },
    });
  }
  next();
}

module.exports = {
  validCode,
};
