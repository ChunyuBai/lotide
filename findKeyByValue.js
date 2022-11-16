// //const assertEqual = function(actual, expected) {
  
//   console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
//   if (actual === expected) {
//     console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
//   }

// };
const findKeyByValue = (myObj, objValue) => {
  for(key in myObj){
    if(myObj[key] === objValue){
      console.log(key);
      return;
    }
  } 
  console.log("not found");
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

findKeyByValue(bestTVShowsByGenre, "The Wire");
findKeyByValue(bestTVShowsByGenre, "That '70s Show");