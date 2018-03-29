const assert = require('assert');

describe('Hot Dog Stand', function(){
  it('returns a message', function(){
    assert.deepEqual(HotDog(['dog', 'bun', 'condiments']), "You ordered dog, bun, and condiments");
  })
})
