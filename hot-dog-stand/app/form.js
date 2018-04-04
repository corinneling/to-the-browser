let menu = require('./dog.json');

let dog = document.getElementById('frank_option'),
    bun = document.getElementById('bun_option'),
    cond = document.getElementById('condiments_option'),
    dayton = document.getElementById("DY"),
    sandiego = document.getElementById("SD");


const CreateForm = function (array, select) {
  for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    select.appendChild(option);
  }
}

const clearForm = function () {
  dog.options.length = 0;
  bun.options.length = 0;
  cond.options.length = 0;
}

const radFunc = function () {
  if (dayton.checked) {
    clearForm();
    CreateForm(menu.dy.dog, dog);
    CreateForm(menu.dy.bun, bun);
    CreateForm(menu.dy.cond, cond);
  } else if (sandiego.checked) {
    clearForm();
    CreateForm(menu.sd.dog, dog);
    CreateForm(menu.sd.bun, bun);
    CreateForm(menu.sd.cond, cond);
  } else {
    clearForm();
    CreateForm(menu.ny.dog, dog);
    CreateForm(menu.ny.bun, bun);
    CreateForm(menu.ny.cond, cond);
  }
}

export const createOptions = function () {
  let rad = document.querySelectorAll("input[type='radio']");
  rad.forEach(function (e) {
    e.addEventListener('change', radFunc);
  })
}