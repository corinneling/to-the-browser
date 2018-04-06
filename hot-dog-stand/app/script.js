let { createOptions } = require('./form.js'),
    { disabledEvent } = require('./admin/admin.js'),
    { listBunsEvent } = require('./admin/admin.js'),
    makeSummary = require('./summary.js'),
    { el } = require('./elements.js'),
    show = document.getElementById('your_order'),
    summary_array = ["polish", "wheat", ["ketchup", "mustard"] ];

const createHotDog = {
  getMultiSelect: function () {
    for (let i = 0; i < el.multiSelect.selectedOptions.length; i++) {
      el.condiments.push(el.multiSelect.selectedOptions[i].value);
    }
  },
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    show.innerHTML = `${makeSummary(summary_array)}`;
  },
  showValues: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};


disabledEvent();
createOptions();
createHotDog.showValues();
