//assertEqual function which can check if two arguments are equal
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🥳 Action passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱 Assertion Failed: ${actual} !== ${expected}`);
  }
};


//returns the first item in the array
const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(['bubble tea']), 'bubble tea');
assertEqual(head([]));
