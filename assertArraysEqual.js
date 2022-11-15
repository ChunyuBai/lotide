const eqArrays = (arr1,arr2) => {
  if(arr1.length !== arr2.length){
    return false;
  } 
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      console.assert(arr1[i] === arr2[i], `${arr1} !== ${arr2} 🛑🛑🛑`);
    }
  }
}

//test code
eqArrays([1, 2, 3],[1, 2, 3]);
eqArrays([1, 2, 3],[1, 2, 4]);
