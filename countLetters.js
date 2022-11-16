const assertEqual = function(actual, expected) {
  if (actual === expected) {
  console.log(`Assertion passed: ${actual} === ${expected} ✅✅✅`);
} else {
  console.log(`Assertion failed: ${actual} !== ${expected} 🛑🛑🛑`);
}
};

const countLetters = (sentence) => {
  sentence = sentence.toLowerCase();
  let result = {};
  for(count of sentence){
    if(result[count]){
      result[count] ++;
    } else {
      result[count] = 1;
    }
  } return result;
};

console.log(countLetters("LHL lighthouse in the house"));