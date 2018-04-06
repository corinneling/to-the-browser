let menu = require('./dog.json'), 
    { el } = require('./elements.js'),
    e_dog = el.dog,
    e_bun = el.bun,
    e_cond = el.cond;

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

const radFunc = function () {
  if (el.dayton.checked) {
    clearForm();
    CreateForm(menu.dy.dog, e_dog);
    CreateForm(menu.dy.bun, e_bun);
    CreateForm(menu.dy.cond, e_cond);
  } else if (el.sandiego.checked) {
    clearForm();
    CreateForm(menu.sd.dog, e_dog);
    CreateForm(menu.sd.bun, e_bun);
    CreateForm(menu.sd.cond, e_cond);
  } else {
    clearForm();
    CreateForm(menu.ny.dog, e_dog);
    CreateForm(menu.ny.bun, e_bun);
    CreateForm(menu.ny.cond, e_cond);
  }
}

export const createOptions = function () {
  el.rad.forEach(function (e) {
    e.addEventListener('change', radFunc);
  })
}

// module.exports = makeSummary;