const expect = require("chai").expect;
const sinon = require("sinon");
const classify = require('../app/classify');


describe("Triangle", function() {
  it("returns equilateral when all 3 sides are equal", function() {
    const arr = [3, 3, 3];
    expect(classify(arr)).to.equal('equilateral');
  });
  it("returns isosceles when 2 sides are equal", function() {
    const arr = [2, 3, 3];
    expect(classify(arr)).to.equal('isosceles');
  });
  it("returns scalene when 2 sides are equal", function() {
    const arr = [2, 3, 4];
    expect(classify(arr)).to.equal('scalene');
  });
});
