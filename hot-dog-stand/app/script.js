let { createOptions } = require('./form.js'),
    el = require('./elements.json'),
    show = document.getElementById('your_order');

const createHotDog = {
  getMultiSelect: function () {
    let multiSelect = document.getElementById('condiments_option')
    for (let i = 0; i < multiSelect.selectedOptions.length; i++) {
      el["condiments"].push(multiSelect.selectedOptions[i].value);
    }
  },
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    let user_val = eval(el.user);
    let dog_val = eval(el.dog);
    let bun_val = eval(el.bun);
    show.innerHTML = `
      customer: ${user_val} <br> 
      meat: ${dog_val} <br> 
      bun: ${bun_val} <br> 
      condiments: ${el["condiments"].join(", ")}`;
  },
  showValues: function () {
    document.forms.orderHotDog.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

createOptions();
createHotDog.showValues();