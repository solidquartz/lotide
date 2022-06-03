//assert equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};

//eqArrays
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

// eqObjects
const eqObjects = function(object1, object2) {

  let firstList = Object.keys(object1);
  let secondList = Object.keys(object2);
 
  if (firstList.length !== secondList.length) {
    return false;
  }

  for (let key of firstList) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {

      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }

    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

//----------------------------------------------

//takes in two objects and logs if they are equal
const assertObjectsEqual = function(object1, object2) {
  const result = eqObjects(object1, object2);
  assertEqual(result, true);
};


//tests
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);
