const expect = require('chai').expect,
  controlDisable = require('../app/admin/control_disable.js'),
   item = {
    setAttribute: function(a, b) {
      return null;
    },
    removeAttribute: function(a, b) {
      return null;
    }
  }

describe('Admin Bun Funcionality', function(){
  it('returns removeAttribute if parameter is true', function(){
      expect(controlDisable(item, true)).to.equal(item.removeAttribute('disabled', true));
  });
  it('returns setAttribute if parameter is false', function(){
    expect(controlDisable(item, false)).to.equal(item.setAttribute('disabled', true));
});
})