//function implementation
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};

//test code
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);