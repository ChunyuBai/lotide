const assertEqual = function(actual, expected) {
  
  console.assert(actual === expected, `${actual} !== ${expected} 🛑🛑🛑`);
  if (actual === expected) {
    console.log(`Assertion passed:`, `${actual} === ${expected} ✅✅✅`);
  }

};

const eqArrays = (arr1,arr2) => {
  if(arr1.length !== arr2.length){
    return false;
  } 
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return false;
    }
  } return true;
}



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

/*item BEFORE:  ground
item AFTER:  g
---
item BEFORE:  control
item AFTER:  c
---
item BEFORE:  to
item AFTER:  t
---
item BEFORE:  major
item AFTER:  m
---
item BEFORE:  tom
item AFTER:  t*/