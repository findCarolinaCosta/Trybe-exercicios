function encode(text) {
  let resultado = [];
  for (let i = 0; i < text.length; i += 1) {
    if (text[i] === 'a') {
      resultado.push('1');
    } else if (text[i] === 'e') {
      resultado.push('2');
    } else if (text[i] === 'i') {
      resultado.push('3');
    } else if (text[i] === 'o') {
      resultado.push('4');
    } else if (text[i] === 'u') {
      resultado.push('5');
    } else {
      resultado.push(text[i]);
    }
  }
  return (resultado.join(''));
}

function decode(text) {
  let resultado = [];
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '1') {
      resultado.push('a');
    } else if (text[index] === '2') {
      resultado.push('e');
    } else if (text[index] === '3') {
      resultado.push('i');
    } else if (text[index] === '4') {
      resultado.push('o');
    } else if (text[index] === '5') {
      resultado.push('u');
    } else {
      resultado.push(text[index]);
    }
  }
  return (resultado.join(''));
}

const functions = { encode, decode };
module.exports = functions;
