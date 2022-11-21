const eqArrays = require('../eqArrays');
const assertEqual = require('../assertArraysEqual');
const middle = require('../middle');

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]