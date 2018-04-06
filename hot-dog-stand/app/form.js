let menu = require('./dog.json'), 
    slc = require('../app/item_location.js'),
    el = require('./elements.js'),
    e_dog = el.dog,
    e_bun = el.bun,
    e_cond = el.cond,
    Dayton = el.dayton;

const CreateForm = function (array, select) {
  for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    select.appendChild(option);
  }
}

const clearForm = function () {
  e_dog.options.length = 0;
  e_bun.options.length = 0;
  e_cond.options.length = 0;
}

const testRad = function () {
  if (Dayton.checked) {
    dogsFor("Dayton");
  } else {
    console.log('error');
  }
}

const radFunc = function () {
  if (Dayton.checked) {
    clearForm();
    CreateForm(slc.dogsFor("Dayton"), e_dog);
    CreateForm(menu.dy.bun, e_bun);
    CreateForm(menu.dy.cond, e_cond);
  } else if (el.sandiego.checked) {
    clearForm();
    CreateForm(slc.dogsFor("San Diego"), e_dog);
    CreateForm(menu.sd.bun, e_bun);
    CreateForm(menu.sd.cond, e_cond);
  } else {
    clearForm();
    CreateForm(slc.dogsFor("New York"), e_dog);
    CreateForm(menu.ny.bun, e_bun);
    CreateForm(menu.ny.cond, e_cond);
  }
}

export const createOptions = function () {
  el.rad.forEach(function (e) {
    e.addEventListener('change', radFunc);
  })
}

