const ZipCode = require("../model/ZipCode");

const getZipCode = async (cep) => await ZipCode.getZipCode(cep);

module.exports = {
  getZipCode,
};
