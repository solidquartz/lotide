//assert equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};

//------------------------------------//
//------------------------------------//

//for reference: find key by value:

//const findKeyByValue = function(object, value) {

// const objectKeys = Object.keys(object);

// for (let key of objectKeys) {
//   if (object[key] === value) {
//     return key;
//   }
// }
// };

//for reference, key: `key`; value: `object[key]`

//------------------------------------//
//------------------------------------//


//takes an object and a callback.
//scans the object and returns the first key for which the callback returns a truthy value.
//if no key is found, returns undefined.

const findKey = function() {
  
};


//tests
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2);
// => "noma"

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), "noma");