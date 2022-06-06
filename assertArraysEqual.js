const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


//takes in two arrays and logs an appropriate message to the console
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  assertEqual(result, true);
};


module.exports = assertArraysEqual;