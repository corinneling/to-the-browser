const assert = require('assert');
const makeSummary = require('../app/order/show_order.js');


describe('Order Summary', function(){
  it('returns the correct summary based on given array parameter', function(){
    let summary = ["Bob", "polish", "whole wheat", "ketchup"];
    assert.deepStrictEqual(makeSummary(summary), `CUSTOMER: Bob <br>\n    DOG: polish <br>\n    BUN: whole wheat <br> \n    CONDIMENTS: ketchup`);
  });
  it('returns the correct summary even with array as last index in the parent array', function(){
    let summary = ["Bob", "polish", "whole wheat", ["ketchup, mustard, pickles, sprinkles"]];
    assert.deepStrictEqual(makeSummary(summary), `CUSTOMER: Bob <br>\n    DOG: polish <br>\n    BUN: whole wheat <br> \n    CONDIMENTS: ketchup, mustard, pickles, sprinkles`);
  })
})
