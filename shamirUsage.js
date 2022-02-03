const shamir = require('./shamir.js');
const Decimal = require('decimal.js');

// Example Bitcoin private key from https://en.bitcoin.it/wiki/Private_key
const example = '0xe9873d79c6d87dc0fb6a5778633389f4453213303da61f20bd67fc233aa33262';
const prime3217 = Decimal('2').pow(3217).sub(1);

// Split the secret into 6 shares such that at least 3 shares are required to reconstruct the secret
const shares = shamir.split(example, 6, 3, prime3217);
// => [{ x: 1, y: 0x... }, { x: 2, y: 0x... }, ... ,{ x: 6, y: 0x... }]

const secret = shamir.combine([shares[0], shares[1], shares[2]], prime3217).toHex();
// => 0xe9873d79c6d87dc0fb6a5778633389f4453213303da61f20bd67fc233aa33262