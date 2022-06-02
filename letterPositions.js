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

//reference guide: letter (key): `sentence[i]`, index (value): `i`

const letterPositions = function(sentence) {
  let results = {};

  // add something to skip spaces

  for (let i = 0; i < sentence.length; i++) {

    //   //key doesn't exist
    //   if (results[sentence[i]] === undefined) {
    //     results[sentence[i]] = [i];

    //     //key exists
    //   } else {
    //     results[sentence[i]].push(i);
    //   }
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

