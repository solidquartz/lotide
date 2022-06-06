//returns the middle of an array
const middle = function(array) {
  if (array.length < 3) {
    return [];
  }

  //for odd arrays
  if (array.length % 2) {
    const index = Math.floor(array.length / 2);
    return [array[index]];
  }

  //for even arrays
  const index = Math.floor(array.length / 2);
  return [array[index - 1], array[index]];
};



module.exports = middle;