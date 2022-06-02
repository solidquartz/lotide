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

//assert equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};


//takes in two arrays and logs an appropriate message to the console
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  assertEqual(result, true);
};



//LETTER POSITIONS
//returns all the INDICES in the string where the given character is found
//multiple numbers may be needed to represent all the places in the string

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};


//simple test
console.log(letterPositions("hello"));

//big test
//console.log(letterPositions("lighthouse in the house"));

/* expected result:
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
} 
*/