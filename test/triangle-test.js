const expect = require("chai").expect;
const sinon = require('sinon');
var EventEmitter = require('events').EventEmitter;
const app = require('../app/script.js')

document = {
  querySelectorAll: function(){ return null; },
  getElementById: function(){ return null; },
};
