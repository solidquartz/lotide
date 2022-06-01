//assertEqual function which can check if two arguments are equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};

//grabs the tail of the input array
const tail = function(array) {
  return array.slice(1);
};

//runs the tail function
//outputs [2, 3, 4, 5] without mutating this array
console.log(tail([1, 2, 3, 4, 5]));


//test case: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); //no need to capture the return value bc we aren't checking
assertEqual(words.length, 3); //original array should still have 3 elements

//array with one element test cast
const oneTest = ['one'];
console.log(tail(oneTest));
assertEqual(oneTest.length, 1);

const emptyTest = [];
console.log(tail(emptyTest));
assertEqual(emptyTest.length, 0);