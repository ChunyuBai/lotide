const without = (source,itemsToRemove) => {
  let result = [];
  let flag = false;
  for(let i = 0; i < source.length; i++) {
    for(let x = 0; x < itemsToRemove.length; x++){
      if(source[i] === itemsToRemove[x]){
        flag = true;
      }
    }
    //For checking whether the flag was false means the element didn't match
    //then we would push it in the result
    if(!flag) {
      result.push(source[i]);
    }
    //we again set the flag = false because we want to compare with the next elements
    //within loop (array)
    flag = false;
  }
  console.log(result);
}
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
