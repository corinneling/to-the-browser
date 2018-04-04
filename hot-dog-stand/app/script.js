let {
  createOptions
} = require('./form.js');

const form = {
  order: document.forms.orderHotDog,
  show: document.getElementById('your_order'),
  user: document.getElementById('user_name'),
  dog: document.getElementById('frank_option'),
  bun: document.getElementById('bun_option'),
  condiments: []
};

const createHotDog = {
  getMultiSelect: function () {
    let multiSelect = document.getElementById('condiments_option')
    for (let i = 0; i < multiSelect.selectedOptions.length; i++) {
      form.condiments.push(multiSelect.selectedOptions[i].value);
    }
  },
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    form.show.innerHTML = `
      customer: ${form.user.value}, <br> 
      meat: ${form.dog.value}, <br> 
      bun: ${form.bun.value}, <br> 
      condiments: ${form.condiments.join(", ")}
    `;
  },
  showValues: function () {
    form.order.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

createOptions();
createHotDog.showValues();