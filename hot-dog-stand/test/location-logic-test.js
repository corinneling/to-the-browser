const assert = require('assert'),
      menu = require('../app/order/menu.json'),
      lol = require('../app/order/location_logic.js');

describe('Dogs Location', function () {
  it('returns json dy.dog if parameter is Dayton', function () {
    let location = "Dayton";
    assert.deepStrictEqual(lol.dogsFor(location), menu.dy.dog);
  });
  it('returns json sd.dog if parameter is San Diego', function () {
    let location = "San Diego";
    assert.deepStrictEqual(lol.dogsFor(location), menu.sd.dog);
  });
  it('returns json ny.dog if parameter is not dayton or san diego', function () {
    let location = "New York";
    assert.deepStrictEqual(lol.dogsFor(location), menu.ny.dog);
  });
});

describe('Buns Location', function () {
  it('returns json dy.bun if parameter is Dayton', function () {
    let location = "Dayton";
    assert.deepStrictEqual(lol.bunsFor(location), menu.dy.bun);
  });
  it('returns json sd.bun if parameter is San Diego', function () {
    let location = "San Diego";
    assert.deepStrictEqual(lol.bunsFor(location), menu.sd.bun);
  });
  it('returns json ny.bun if parameter is not dayton or san diego', function () {
    let location = "New York";
    assert.deepStrictEqual(lol.bunsFor(location), menu.ny.bun);
  });
});

describe('Condiments Location', function () {
  it('returns json dy.cond if parameter is Dayton', function () {
    let location = "Dayton";
    assert.deepStrictEqual(lol.condFor(location),  menu.dy.cond);
  });
  it('returns json sd.cond if parameter is San Diego', function () {
    let location = "San Diego";
    assert.deepStrictEqual(lol.condFor(location), menu.sd.cond);
  });
  it('returns json ny.cond if parameter is not dayton or san diego', function () {
    let location = "New York";
    assert.deepStrictEqual(lol.condFor(location), menu.ny.cond);
  });
});