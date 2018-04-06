let options = require('./form.js'), 
    { disabledEvent } = require('./admin/admin.js'),
    makeSummary = require('./summary.js'),
    el = require('./elements.js');

const createHotDog = {
  // put selected condiments into an array
  getMultiSelect: function () {
    for (let i = 0; i < el.multiSelect.selectedOptions.length; i++) {
      el.condiments.push(el.multiSelect.selectedOptions[i].value);
    }
  },
  // let dom know the order
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    let summary = [el.user.value, el.selects[0].value, el.selects[1].value, el.condiments];
    el.show.innerHTML = `${makeSummary(summary)}`;
  },
  // listen for the form to submit
  formSumbit: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

// admin control over bun options
disabledEvent();
// attached options to selects based on location
options();
// call form event listener 
createHotDog.formSumbit();