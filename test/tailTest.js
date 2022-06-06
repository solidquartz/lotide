const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');


const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);

const oneTest = ['one'];
assertArraysEqual(tail(oneTest), ['one']);

const emptyTest = [];
assertArraysEqual(tail(emptyTest), []);

