let { createOptions } = require('./form.js'), 
    { disabledEvent } = require('./admin/admin.js'),
    makeSummary = require('./summary.js'),
    el = require('./elements.js');

const createHotDog = {
  getMultiSelect: function () {
    for (let i = 0; i < el.multiSelect.selectedOptions.length; i++) {
      el.condiments.push(el.multiSelect.selectedOptions[i].value);
    }
  },
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    let summary = [el.user.value, el.dog.value, el.bun.value, el.condiments];
    el.show.innerHTML = `${makeSummary(summary)}`;
  },
  showValues: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

disabledEvent();
createOptions();
createHotDog.showValues();