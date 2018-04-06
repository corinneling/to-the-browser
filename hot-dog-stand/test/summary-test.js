const assert = require('assert');
const makeSummary = require('../app/summary.js');


describe('Summary', function(){
  it('returns the correct summary based on given array parameter', function(){
    let summary = ["Bob", "polish", "whole wheat", "ketchup"];
    assert.deepStrictEqual(makeSummary(summary), "CUSTOMER: Bob, DOG: polish, BUN: whole wheat, CONDIMENTS: ketchup.");
  });
  it('returns the correct summary even with array as last index in the parent array', function(){
    let summary = ["Bob", "polish", "whole wheat", ["ketchup, mustard, pickles, sprinkles"]];
    assert.deepStrictEqual(makeSummary(summary), "CUSTOMER: Bob, DOG: polish, BUN: whole wheat, CONDIMENTS: ketchup, mustard, pickles, sprinkles.");
  })
})
