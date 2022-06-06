const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); //pass
assertArraysEqual(middle([1, 2, 3, 4]), [2]); //fail
assertArraysEqual(middle([1, 2]), []); //pass
assertArraysEqual(middle([1]), [2]); //fail
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); //pass