function verify(password) {
  if (password === null) return false;
  else if (password.length <= 8) return false;
  return true;
}

module.exports = verify;