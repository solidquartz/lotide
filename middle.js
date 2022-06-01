//ASSERT EQUAL
//checks if an argument is truthy or falsy as expected
//refactor later to take the happy path
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};

//EQUAL ARRAYS
//compares two arrays; to be used in assertArraysEqual
const eqArrays = function(arrayOne, arrayTwo) {
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

//ASSERT ARRAY EQUAL
//checks if two arrays are equal
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  assertEqual(result, true);

};

//MIDDLE
//returns the middle of an array
const middle = function(array) {
  if (array.length < 3) {
    return [];
  }

  //for odd arrays
  if (array.length % 2) {
    const index = Math.floor(array.length / 2);
    return [array[index]];
  }

  //for even arrays
  const index = Math.floor(array.length / 2);
  return [array[index - 1], array[index]];
};

//tests
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2]);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
