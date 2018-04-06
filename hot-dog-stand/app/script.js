let { createOptions } = require('./form.js'),
    { disabledEvent } = require('./admin/admin.js'),
    { el } = require('./elements.js'),
    show = document.getElementById('your_order');

const createHotDog = {
  getMultiSelect: function () {
    for (let i = 0; i < el.multiSelect.selectedOptions.length; i++) {
      el.condiments.push(el.multiSelect.selectedOptions[i].value);
    }
  },
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    show.innerHTML = `
      Customer: ${el.user.value},  
      Meat: ${el.dog.value},  
      Bun: ${el.bun.value}, 
      Condiments: ${el.condiments.join(", ")}`;
  },
  showValues: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

disabledEvent();
createOptions();
createHotDog.showValues();