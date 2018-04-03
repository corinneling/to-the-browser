
let json = require('./dog.json');
let { CreateForm } = require('./form.js');

let dog = document.getElementById('frank_option');
let bun = document.getElementById('bun_option');
let cond = document.getElementById('condiments_option');
let dy_dog = json["dog"]["Dayton"];
let dy_bun = json["bun"]["Dayton"];
let dy_cond = json["condiment"]["Dayton"];
// create json files to store the data instead of calling the html
// render the html with js

CreateForm(dy_dog, dog);
CreateForm(dy_bun, bun);
CreateForm(dy_cond, cond);

const form = {
  order: document.forms.orderHotDog,
  user: document.getElementById('user_name'),
  dog: document.getElementById('frank_option'),
  bun: document.getElementById('bun_option'),
  condiments: document.getElementById('condiments_option'),
};

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
