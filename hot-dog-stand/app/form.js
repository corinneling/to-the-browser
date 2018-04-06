let menu = require('./dog.json'), 
    slc = require('../app/item_location.js'),
    el = require('./elements.js'),
    dog = el.dog,
    bun = el.bun,
    cond = el.cond,
    Dayton = el.dayton;

const hdForm = {
   createOptions: function (array, select) {
    for (let i = 0; i < array.length; i++) {
      let option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      select.appendChild(option);
    }
  }
}

let sections = [dog, bun, cond];

const clearOptions = function (array) {
  for(var i = 0; i < array.length; i++) {
    array[i].options.length = 0;
  }
}
const radioBtnListen = function () {
  clearOptions(sections);
  if (Dayton.checked) {
    hdForm.createOptions(slc.dogsFor("Dayton"), dog);
    hdForm.createOptions(slc.bunsFor("Dayton"), bun);
    hdForm.createOptions(slc.condFor("Dayton"), cond);
  } else if (el.sandiego.checked) {
    hdForm.createOptions(slc.dogsFor("San Diego"), dog);
    hdForm.createOptions(slc.bunsFor("San Diego"), bun);
    hdForm.createOptions(slc.condFor("San Diego"), cond);
  } else {
    hdForm.createOptions(slc.dogsFor("New York"), dog);
    hdForm.createOptions(slc.bunsFor("New York"), bun);
    hdForm.createOptions(slc.condFor("New York"), cond);
  }
}

export const optionsEvent = function () {
  el.rad.forEach(function (e) {
    e.addEventListener('change', radioBtnListen);
  })
}

