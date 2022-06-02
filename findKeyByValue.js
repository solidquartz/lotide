//assert equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};

//--------------------------------

const findKeyByValue = function(object, value) {

  //allows searching through object keys
  const objectKeys = Object.keys(object);

  //loops through object keys
  for (let key of objectKeys) {

    if (object[key] === value) {
      return key;
    }
  }
};

//for reference, key: `key`; value: `object[key]`



//tests
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);