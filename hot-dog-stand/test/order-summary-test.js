const expect = require('chai').expect;
const makeSummary = require('../app/order/show_order.js');

describe('Order Summary', function () {
  it('returns the correct summary based on given array parameter', function () {
    let summary = ["Bob", "polish", "whole wheat", "ketchup"];
    expect(makeSummary(summary)).to.include("ketchup");
  });
  it('returns the correct summary even with array as last index in the parent array', function () {
    let summary = ["Bob", "polish", "whole wheat", ["ketchup, mustard, pickles, sprinkles"]];
    expect(makeSummary(summary)).to.include("ketchup, mustard, pickles, sprinkles");
  });
});