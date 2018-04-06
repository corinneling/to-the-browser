let { createOptions } = require('./form.js'),
    { disabledEvent } = require('./admin/admin.js'),
    makeSummary = require('./summary.js'),
    { el } = require('./elements.js'),
    summary_array = ["Bob", "polish", "wheat", ["ketchup", "mustard"] ];

const createHotDog = {
  getMultiSelect: function () {
    for (let i = 0; i < el.multiSelect.selectedOptions.length; i++) {
      el.condiments.push(el.multiSelect.selectedOptions[i].value);
    }
  },
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    document.getElementById('your_order').innerHTML = `${makeSummary(summary_array)}`;
  },
  showValues: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

const getCondiments = function(toppings) {

}
disabledEvent();
createOptions();
createHotDog.showValues();
