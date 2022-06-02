//assert equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};

//--------------------------------
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

//---------------------------


// Returns true if both objects have identical keys with identical values
const eqObjects = function(object1, object2) {

  let firstList = Object.keys(object1);
  let secondList = Object.keys(object2);
  //note: Object.keys returns an array

  //returns false if there are not the same number of keys
  if (firstList.length !== secondList.length) {
    return false;
  }

  //loop through the keys and check both objects' values for the keys
  //return false as soon as there is not a match
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

//for reference, key: `key`; value: `object[key]`



//tests

const test1 = function() {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  assertEqual(eqObjects(ab, ba), true);
};


const test2 = function() {
  const ab = { a: "1", b: "2" };
  const abc = { a: "1", b: "2", c: "3" };
  assertEqual(eqObjects(ab, abc), false);
};

const test3 = function() {
  const ab = { a: "1", b: "2" };
  const xy = { a: "3", b: "2" };
  assertEqual(eqObjects(ab, xy), false);
  assertEqual(eqObjects(ab, ab), true);
};

const test4 = function() {
  const ab = { a: "1", b: "2" };
  const fg = { a: "1", g: "2" };
  assertEqual(eqObjects(ab, fg), false);
};

test1();
test2();
test3();
test4();

const arrayTest1 = function() {
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  assertEqual(eqObjects(cd, dc), true); // => true

};

const arrayTest2 = function() {
  const cd = { c: "1", d: ["2", 3] };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  assertEqual(eqObjects(cd, cd2), false); // => false
};

const arrayTest3 = function() {
  const cd = { c: "1", d: ["2", 3] };
  const cd2 = { c: "1", d: 2 };
  assertEqual(eqObjects(cd, cd2), false); // => false
};

const arrayTest4 = function() {
  const cd = { d: ["2", 3], e: "1" };
  const cd2 = { d: ["2", 3], e: "2" };
  assertEqual(eqObjects(cd, cd2), false); // => false
};


arrayTest1();
arrayTest2();
arrayTest3();
arrayTest4();