const techList = (arrayTechs, name) => {
  if (arrayTechs.length === 0) return 'Vazio!';

  const techList = arrayTechs
    .sort()
    .map((tech) => ({
      tech,
      name,
    }));
  return techList;
};


module.exports = techList;