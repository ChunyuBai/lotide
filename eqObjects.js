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

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false
