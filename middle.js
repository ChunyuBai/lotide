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

//middle function
const middle = (arr) => {
  let middleArr = [];
  if(arr.length <= 2) {
     console.log(middleArr);
     return;
  }
  
  if(arr.length > 2 && arr.length % 2 === 0) {
    //This handle an even length array
    const middleIndex1 = arr.length / 2;
    const middleIndex2 = middleIndex1 - 1;
    middleArr.push(arr[middleIndex1]);
    middleArr.push(arr[middleIndex2]);
  } else {
    //This handle an odd length array
    const middleIndex = Math.floor(arr.length / 2)
    middleArr.push(arr[middleIndex]);
  }
  console.log(middleArr);
}

//For arrays with one or two elements, there is no middle. Return an empty array.

middle([1]) // => []
middle([1, 2]) // => []

//For arrays with odd number of elements, an array containing a single middle element should be returned.


middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

//For arrays with an even number of elements, an array containing the two elements in the middle should be returned

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

