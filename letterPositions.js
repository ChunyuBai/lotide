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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for(let i = 0; i < sentence.length; i++){
    //remove the space
    if(sentence[i] === " "){
      sentence = sentence.replace(" ","");
    }

    if(results[sentence[i]]){
      results[sentence[i]].push(i)
    } else (
      results[sentence[i]] = [i]
    )
  } return results;
};
console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"))