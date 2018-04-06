const assert = require('assert');
const slc = require('../app/location_logic.js');

describe('Dogs Location', function(){
  it('returns json ny.dog location if parameter is not dayton or san diego', function(){
    let location = "New York";
    assert.deepStrictEqual(slc.dogsFor(location), [ 'Sushi', 'Steak', 'Classic' ]);
  });
  it('returns json dy.dog if parameter is Dayton', function(){
    let location = "Dayton";
    assert.deepStrictEqual(slc.dogsFor(location), [ 'Mystery Meat', 'Chili', 'Block of Cheese', 'Beef', 'Polish' ]);
  });
  it('returns json sd.dog if parameter is San Diego', function(){
    let location = "San Diego";
    assert.deepStrictEqual(slc.dogsFor(location), [ 'Fish', 'Chicken', 'Polish', 'Beef' ]);
  });
});

describe('Buns Location', function(){
  it('returns json ny.bun if parameter is not dayton or san diego', function(){
    let location = "New York";
    assert.deepStrictEqual(slc.bunsFor(location), ["Whole Wheat", "Everthing Bagel", "None"]);
  });
  it('returns json dy.bun if parameter is not dayton or san diego', function(){
    let location = "Dayton";
    assert.deepStrictEqual(slc.bunsFor(location), ["Whole Wheat", "Classic", "Waffle", "Omelette", "Cotton Candy", "None"]);
  });
  it('returns json sd.bun location if parameter is not dayton or san diego', function(){
    let location = "San Diego";
    assert.deepStrictEqual(slc.bunsFor(location), ["Avocado", "Whole Wheat", "None", "Eggplant", "Banana Bread", "None"]);
  });
});

describe('Condiments Location', function(){
  it('returns json ny.cond if parameter is not dayton or san diego', function(){
    let location = "New York";
    assert.deepStrictEqual(slc.condFor(location), ["Ketchup", "Mustard", "Relish", "None"]);
  });
  it('returns json dy.cond if parameter is not dayton or san diego', function(){
    let location = "Dayton";
    assert.deepStrictEqual(slc.condFor(location), ["Cheese", "Chili", "Egg", "Lettuce", "Ketchup", "Mustard", "Relish", "Sprinkles", "None"]);
  });
  it('returns json sd.cond if parameter is not dayton or san diego', function(){
    let location = "San Diego";
    assert.deepStrictEqual(slc.condFor(location), ["Cotton Candy", "Ketchup", "Hot Sauce", "Mustard", "Pickles", "Deep Fried Ice Cream", "None"]);
  });
});