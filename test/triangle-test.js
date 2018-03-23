const classify = require('../app/classify');
const assert = require('assert');

describe("Triangle", function() {
  it("returns equilateral when all 3 sides are equal", function() {
    const arr = [3, 3, 3];
    assert.strictEqual(classify(arr), 'equilateral');
  });
  it("returns isosceles when 2 sides are equal", function() {
    const arr = [2, 3, 3];
      assert.strictEqual(classify(arr), 'isosceles');
  });
  it("returns scalene when 2 sides are equal", function() {
    const arr = [2, 3, 4];
      assert.strictEqual(classify(arr), 'scalene');
  });
  it("returns imaginary when triangle inequality therom is false", function() {
    const arr = [2, 3, 25];
      assert.strictEqual(classify(arr), 'imaginary');
  });
});
