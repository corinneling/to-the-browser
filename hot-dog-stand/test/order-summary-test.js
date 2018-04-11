const expect = require('chai').expect;
const orderSummary = require('../app/order/show_order.js');
let summary = [{
  Customer: 'Bob',
  Order: '10',
  Meat: 'polish',
  Bun: 'whole wheat',
  Condiments: 'ketchup, mustard',
  Sides: 'chips'
}]

describe('Order Summary', function () {
  it('returns the multiple condiments with correct key', function () {
  expect(orderSummary(summary)).to.include("Condiments: ketchup, mustard");
  });
  it('returns customer name with correct key', function () {
    expect(orderSummary(summary)).to.include("Customer: Bob");
  });
});