const professionalBoard = require('./dado-bonus')

// Pesquisa

const generateError = (findWoker, detail) => {
  if (!findWoker) throw new Error("ID não identificado");
  if (!findWoker[detail]) throw new Error('Informação indisponível');
}
const searchEmployee = (id, detail) => {
  const findWoker = professionalBoard.find(woker => woker.id === id);
  generateError(findWoker, detail);
  return findWoker[detail];
};

module.exports = searchEmployee;
