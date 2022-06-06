
//grabs the tail of the input array
const tail = function(array) {

  if (array.length === 0) {
    return [];
  }

  if (array.length === 1) {
    return array;
  }

  return array.slice(1);
};

module.exports = tail;



//test case: check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); //no need to capture the return value bc we aren't checking
// assertEqual(words.length, 3); //original array should still have 3 elements

// //array with one element test cast
// const oneTest = ['one'];
// console.log(tail(oneTest));
// assertEqual(oneTest.length, 1);

// const emptyTest = [];
// console.log(tail(emptyTest));
// assertEqual(emptyTest.length, 0);