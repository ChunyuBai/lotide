const eqObjects = function(object1, object2) {
  let objKey1 = Object.keys(object1);
  let objKey2 = Object.keys(object2);
  let result = true;
  // console.log(objKey1);
  //check wheather have same amount of keys
  if (objKey1.length !== objKey2.length){
    return false;
  }
  
  for(key in object1){
      if(Array.isArray(object1[key]) && Array.isArray(object2[key])){
        // console.log("eqArrays", eqArrays(object1[key],object2[key]));

        //check if 2 objects have the same array, if check eqarray is false, then return false
        if(eqArrays(object1[key],object2[key]) === false){
          return false;
        };
      } else if(object1[key] !== object2[key]) {
        return false;
      } 
    }
  return true;
  
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect; // <= add this line
  if(eqObjects(actual,expected)){
    console.log(`Assertion passed:`, `${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🛑🛑🛑`);
  }
};
const a = {
  a: 0,
  b: 1,
  c: 2
}
const b = {
  a: 0,
  b: 1,
  c: 2
}
assertObjectsEqual(a,b);