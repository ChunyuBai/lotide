// FUNCTION IMPLEMENTATION

const assertEqual = function(actual, expected) {
  
  console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
  if (actual === expected) {
    console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
  }

};

//TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 0);
// assertEqual("wow","wow");
// assertEqual(2,2);
//Export the function using module.exports.
module.exports = assertEqual;
