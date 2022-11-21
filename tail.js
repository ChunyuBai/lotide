// FUNCTION IMPLEMENTATION

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
//   } else {
//     console.log(`Assertion fail:`, `${actual} !== ${expected} 🛑🛑🛑`);
//   }
// };
const assertEqual = require('./assertEqual');

const tail = (arr) =>{
  let result = [];
  for(let i = 1; i < arr.length; i++) {
    result.push(arr[i])
  }return result;
}
// console.log(tail([3,4,5]));
// console.log(tail([`hello`, `sam`,`sdds`]));
// TEST CODE

// assertEqual(tail([5,6,7]).toString(),[6,7].toString());
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString,["Lighthouse", "Labs"].toString());

module.exports = tail;
