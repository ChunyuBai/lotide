// FUNCTION IMPLEMENTATION

// const assertEqual = function(actual, expected) {
  
//   console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
//   if (actual === expected) {
//     console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
//   }

// };
//Refactoring head

const assertEqual = require('./assertEqual');
const head = function (arr) {
  return arr[0];
}



// TEST CODE
// assertEqual(head([5,6,7]),5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]),"Hell");

module.exports = head;