function mapString(objBase, text) {
  const resultado = text.split('').map((count) => {
    if (objBase[count]) {
      return objBase[count];
    }
    return count;
  });
  return resultado.join('');
}

function encode(text) {
  const base = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return mapString(base, text);
}
function decode(text) {
  const base = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return mapString(base, text);
}
const functions = { encode, decode };
module.exports = functions;