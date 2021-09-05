function verify(password) {
  if (password === null) return false;
  else if (password.length <= 8) return false;
  else if (!/[A-Z0-9]/.test(password)) return false;
  return true;
}

module.exports = verify;