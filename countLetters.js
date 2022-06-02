//assert equal
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`🥳 Action passed: [${actual}] === [${expected}]`);
  }

  console.log(`😱 Assertion Failed: [${actual}] !== [${expected}]`);
};


//COUNT LETTERS
//takes in a sentence as a string and returns a count of each of the letters in it
const countLetters = function(sentence) {
  const letters = {
  };

  //loops
  for (let letter of sentence) {

    // //skips spaces (not working)
    // if (sentence[letter] === ' ') {
    //   letter++;
    // }
    
    //creates a key-value pair if the letter doesn't exist
    //notably it's checking LETTERS, not sentence
    if (letters[letter] === undefined) {
      letters[letter] = 1;
    }

    //if it does exist it increases by 1
    letters[letter]++;
  }
  return letters;
};


//test
console.log(countLetters("lighthouse in the house"));