//equal arrays
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

//----------------------------------------------//
//----------------------------------------------//

//returns a slice of the array with elements taken from the beginning, until the callback returns a truthy value.
//the callback is only provided one value: the item in the array
const takeUntil = function(array, callback) {
  const newArray = [];

  for (const item of array) {

    if (!callback(item)) {

      newArray.push(item);

    } else {
      return newArray;
    }
  }
  return newArray;
};


//what is the callback actually doing?

// const positive = function(num) {
//   const returnValue = num > 0;
//   return returnValue;
// };

// console.log(positive(-5));
// => true
//in essence, the callback is passing in a boolean so here it's used as a condition


//tests
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 3];
const results3 = takeUntil(data3, x => x < 0);
console.log(results3);


//expected output
// [1, 2, 5, 7, 2];
// --
//   ['I\'ve', 'been', 'to', 'Hollywood'];

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, x => x === ','), ['I\'ve', 'been', 'to', 'Hollywood']);