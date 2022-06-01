//takes in two arrays and returns true or false
//based on if they are a perfect match
const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  //if it gets through the whole loop without exiting, it will be true
  //this works better than else because we want it to check the whole thing or escape
  return true;
};

//takes in two arrays and logs an appropriate message to the console
const assertArraysEqual = function(arrayOne, arrayTwo) {
  if (eqArrays(arrayOne, arrayTwo)) {
    console.log(`🥳 Equal!`);
  } else {
    console.log(`😱 Not equal!`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
