const expect = require('chai').expect;
const tri = require('../app/script.js');
const values = [1, 2, 3];

describe('Triangle', function(){
  it('returns equilateral for 3 equal sides', function(){
    expect(tri()).to.equal('equilateral');
  })
})
