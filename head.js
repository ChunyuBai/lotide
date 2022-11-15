// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  
  console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
  if (actual === expected) {
    console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
  }

};
const head = function (arr) {
  return arr[0];
}



// TEST CODE
assertEqual(head([5,6,7]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]));
