const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;

describe(`Test my tail function`,() => {
  it(`should return 6, 7 for [5,6,7]`, () => {
    assert.deepEqual(tail([5,6,7]),[6,7]);
  });
  it(`should return Lighthouse, Labs for ["Hello", "Lighthouse", "Labs"]`, () =>{
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  })
})

// assertEqual(tail([5,6,7]).toString(),[6,7].toString());
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).toString,["Lighthouse", "Labs"].toString());