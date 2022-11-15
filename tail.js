// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  
  console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
  if (actual === expected) {
    console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
  }

};
const tail = function (arr) {
  return arr.slice(1);
};

// TEST CODE
assertEqual(tail([5,6,7]));
assertEqual(tail(["Hello", "Lighthouse", "Labs"]));
