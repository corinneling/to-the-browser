const assert = require('assert'),
  menu = require('../app/order/menu.json'),
  location = require('../app/order/data_logic.js');

describe('Location', function () {
  it('returns the new york categories array of objects with ny parameters', function () {
    let area = "ny";
    assert.deepStrictEqual(location(area), menu.ny.categories);
  });
  it('returns the san diego categories array of objects with sd parameters', function () {
    let area = "sd";
    assert.deepStrictEqual(location(area), menu.sd.categories);
  });
  it('returns the dayton categories array of objects with dy parameters', function () {
    let area = "dy";
    assert.deepStrictEqual(location(area), menu.dy.categories);
  });
});