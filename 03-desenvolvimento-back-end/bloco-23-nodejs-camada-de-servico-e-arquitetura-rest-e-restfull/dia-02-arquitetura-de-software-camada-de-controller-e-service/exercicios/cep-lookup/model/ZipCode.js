const connection = require("../service/connection");

async function getZipCode(cep) {
  const query = "SELECT * FROM cep_lookup.ceps WHERE cep = ?";
  const [result] = await connection.execute(query, [cep]);

  return result;
}

module.exports = {
  getZipCode,
};
