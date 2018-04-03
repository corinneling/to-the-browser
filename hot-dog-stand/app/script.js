
let { radioBtns } = require('./form.js');

const form = {
  order: document.forms.orderHotDog,
  user: document.getElementById('user_name'),
  dog: document.getElementById('frank_option'),
  bun: document.getElementById('bun_option'),
  condiments: document.getElementById('condiments_option'),
};

radioBtns();

const createHotDog = {
  messageConstructor: function(e) {
    e.preventDefault()
    console.log(`Hot Dog Bot: ${form.user.value} ordered a ${form.dog.value} dog with ${form.bun.value} bun, and ${form.condiments.value}`);
  },
  showValues: function() {
    form.order.addEventListener("submit", this.messageConstructor.bind(this));
  }
};
createHotDog.showValues();
