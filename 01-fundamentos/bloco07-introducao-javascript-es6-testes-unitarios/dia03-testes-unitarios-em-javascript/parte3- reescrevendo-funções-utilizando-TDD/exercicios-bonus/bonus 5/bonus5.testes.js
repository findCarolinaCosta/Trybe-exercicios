const verify = require('./bonus5-PasswordVerifier');
const assert = require('assert');

assert.strictEqual(typeof verify, 'function');

assert.strictEqual(typeof verify, 'function'); // Password should be larger than 8 chars
assert(!verify('12345678'));
assert(!verify(null)); // Password should not be null
assert(!verify('gandalfthegray'), 'A senha deve ter pelo menos uma letra minúscula'); // Password should have one uppercase letter at least
assert(!verify('YOUSHALLNOTPASS'), 'A senha deve possuir letras maiúsculas e minúsculas.'); // Password should have one lowercase letter at least
assert(!verify('GandalfTheWhite'), 'A senha deve ter pelo menos um número'); // Password should have one number at least
assert(verify('G4nd4lfTh3Wh1t3')); // Correct password