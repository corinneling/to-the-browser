const { getRanges } = require("./ranges.js");
const classifyTriangle = require("./classify.js");
const messageConstructor = require("./message.js");

const SendTriangle = {
  btn: document.getElementById("submitBtn"),
  inputs: document.querySelectorAll("input[type=range]"),
  getInputValues: function() {
    let arr = Array.from(this.inputs).map(inputs => inputs.value);
    return arr;
  },
  addTypeToString: function() {
    // messageConstructor is from message.js
    // classifyTriangle is from classify.js
    return messageConstructor(classifyTriangle(this.getInputValues()));
  },
  showAnswer: function() {
    this.btn.addEventListener("click", this.addTypeToString.bind(this));
  }
};

(function initApplication() {
  SendTriangle.showAnswer();
  getRanges();
})();
