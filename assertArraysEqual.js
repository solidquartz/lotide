const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


//takes in two arrays and logs if they are equal or not
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  assertEqual(result, true);
};


module.exports = assertArraysEqual;