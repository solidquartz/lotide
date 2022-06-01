//takes in two arrays and returns true or false
//based on if they are a perfect match
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

//takes in two arrays and logs an appropriate message to the console
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🥳 Equal! ${arrayOne} === ${arrayTwo}!`);
  } else {
    console.log(`😱 Not equal! ${arrayOne} !== ${arrayTwo}!`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
