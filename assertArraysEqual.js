const eqArrays = require('./eqArrays');
const assertArraysEqual = (actual,expected) => {
  if(eqArrays(actual,expected)) {
    console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`Assertion failed:`, `${actual} !== ${expected} 🛑🛑🛑`);
  }
}

//test code
// assertArraysEqual([1, 2, 3],[1, 2, 3]);
// assertArraysEqual([1, 2, 3],[1, 2, 4]);

module.exports = assertArraysEqual;
