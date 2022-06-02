//assert equal functions
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

//assert arrays equal
const assertArraysEqual = function(arrayOne, arrayTwo) {
  const result = eqArrays(arrayOne, arrayTwo);
  assertEqual(result, true);
};


//-------------------------------------------------------------


//LETTER POSITIONS
//returns all the INDICES in the string where the given character is found
//multiple numbers may be needed to represent all the places in the string
//within the loop, the object is only edited if the character isn't a space

//reference guide: letter (key): `sentence[i]`, index (value): `i`

const letterPositions = function(sentence) {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {

    if (sentence[i] !== " ") {
      results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
    }

  }
  return results;
};


//test
assertArraysEqual(letterPositions("hello hi").h, [0, 6]);
assertArraysEqual(letterPositions("hello hi").e, [1]);
assertArraysEqual(letterPositions("hello hi").l, [2, 3]);
assertArraysEqual(letterPositions("hello hi").o, [4]);
assertArraysEqual(letterPositions("hello hi").o, [4]);

