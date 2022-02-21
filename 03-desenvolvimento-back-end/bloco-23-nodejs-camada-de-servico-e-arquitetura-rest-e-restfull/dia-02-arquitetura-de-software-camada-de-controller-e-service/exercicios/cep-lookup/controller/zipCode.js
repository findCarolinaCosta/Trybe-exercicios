const ZipCode = require("../service/zipCode");

async function getZipCode(req, res, next) {
  try {
    const { cep } = req.params;

    const zipInfos = await ZipCode.getZipCode(cep);

    if (!zipInfos || zipInfos.length === 0) {
      return res
        .status(404)
        .json({ error: { code: "notFound", message: "CEP não encontrado" } });
    }

    return res.status(200).json(zipInfos);
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = {
  getZipCode,
};
