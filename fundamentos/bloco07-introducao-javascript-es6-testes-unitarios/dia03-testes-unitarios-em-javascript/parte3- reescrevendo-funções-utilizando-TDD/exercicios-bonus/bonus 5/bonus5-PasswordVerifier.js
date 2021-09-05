const passwordOK = 'A senha está Ok';
const needLc = 'A senha deve ter pelo menos uma letra minúscula e pelo menos um número';

function verify(password) {
  if (password === null) return false;
  else if (password.length <= 8) return false;
  else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password))
    return needLc;
  return passwordOK;
}

module.exports = verify;