
let { createOptions } = require('./form.js');

const form = {
  order: document.forms.orderHotDog,
  show: document.getElementById('your_order'),
  user: document.getElementById('user_name'),
  dog: document.getElementById('frank_option'),
  bun: document.getElementById('bun_option'),
  condiments: [],
};

createOptions();

const getMultiSelect = function() {
  let multiSelect = document.getElementById('condiments_option')
  for ( var i = 0; i < multiSelect.selectedOptions.length; i++) {
    let arr = multiSelect.selectedOptions[i].value;
    form.condiments.push(arr);
  }
}

const createHotDog = {
  messageConstructor: function(e) {
    e.preventDefault()
    getMultiSelect();
    form.show.innerHTML = `
      customer: ${form.user.value}, <br> 
      meat: ${form.dog.value}, <br> 
      bun: ${form.bun.value}, <br> 
      condiments: ${form.condiments.join(", ")}
    `;
  },
  showValues: function() {
    form.order.addEventListener("submit", this.messageConstructor.bind(this));
  }
};
createHotDog.showValues();
