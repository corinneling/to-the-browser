const assert = require('assert');
const dogsFor = require('../app/dog_location.js');

describe('Dogs Location', function(){
  it('returns the new york location if parameter is not dayton or san diego', function(){
    let location = "New York";
    assert.deepStrictEqual(dogsFor(location), "New York");
  });
  it('returns Dayton if parameter is dayton', function(){
    let location = "Dayton";
    assert.deepStrictEqual(dogsFor(location), "Dayton");
  });
  it('returns San Diego if parameter is San Diego', function(){
    let location = "San Diego";
    assert.deepStrictEqual(dogsFor(location), "San Diego");
  });
});