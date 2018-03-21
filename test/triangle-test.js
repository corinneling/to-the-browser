const expect = require("chai").expect;
const sinon = require("sinon");

document = {
  querySelectorAll: function() {
    return null;
  },
  getElementById: function() {
    return null;
  }
};

describe("Triangle", function() {
  it("will see if test runs", function() {
    const app = require("../app/script.js");
    assert(true);
  });
});
