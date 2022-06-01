//assertEqual function which can check if two arguments are equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥳 Action passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//takes in two arrays and returns true or false
//based on if they are a perfect match
const eqArrays = function (arrayOne, arrayTwo) {
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  //if it gets through the whole loop without exiting, it will be true
  //this works better than else because we want it to check the whole thing or escape
  return true;
};

//tests the assertion
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
