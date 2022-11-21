const eqArrays = require('../eqArrays');
const assertEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

describe(`my middleTest function`, () => {
  it(`should return 2, 3 for [1, 2, 3, 4]`, () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });

  it(`should return 2 for [1, 2, 3]`, () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  })
})

// console.log(middle([1, 2, 3, 4])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6]))