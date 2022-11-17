const takeUntil = function(array, callback) {
  // ...
  const results = [];
  for(element of array){
    //if condition: element(x) < 0 or when element(x) = "," is false, then push 
    if(!callback(element)){
      results.push(element);
    } else {
      return results;//if condition: element(x) < 0 or when element(x) = "," is true; don't push
    } 
  }
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]
