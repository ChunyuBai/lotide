const assertEqual = function(actual, expected) { 
  console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
  if (actual === expected) {
    console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
  }
};

const findKey = (obj,callBack) => {
  // console.table(obj)
  for(Key in obj){
    // console.log(obj[Key].stars);
    if(callBack(obj[Key])){
      return Key;
    } 
  }
  return undefined;
  }

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => "noma"

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 4)) // undefined;