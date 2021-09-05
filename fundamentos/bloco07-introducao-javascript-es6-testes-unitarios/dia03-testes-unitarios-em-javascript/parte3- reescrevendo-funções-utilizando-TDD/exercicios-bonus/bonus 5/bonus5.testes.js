const verify = require('./bonus5-PasswordVerifier');
const assert = require('assert');

assert.strictEqual(typeof verify, 'function');

assert.strictEqual(typeof verify, 'function'); // Password should be larger than 8 chars
assert(!verify('12345678'));
assert(!verify(null)); // Password should not be null
assert(!verify('gandalfthegray')); // Password should have one uppercase letter at least
assert(!verify('YOUSHALLNOTPASS')); // Password should have one lowercase letter at least
