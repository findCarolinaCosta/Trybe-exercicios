const passwordOK = 'A senha está Ok';
const caseSensitive = 'A senha deve ter pelo menos uma letra minúscula';
const caseSensitive2 = 'A senha deve possuir letras maiúsculas e minúsculas';
const needNumber = 'A senha deve ter pelo menos um número';

function verify(password) {
  if (password === null) {
    return false;
  } else if (password.length <= 8) {
    return false;
  } else if (!/[A-Z]/.test(password)) {
    return caseSensitive;
  } else if (!/[a-z]/.test(password)) {
    return caseSensitive2;
  } else if (!/[0-9]/.test(password)) {
    return needNumber;
  }
  return passwordOK;
}

module.exports = verify;