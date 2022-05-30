//function implementation
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
  }

};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);