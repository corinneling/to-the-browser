let createForm = require('./admin_form.js'), 
    el = require('../elements.js'), 
    ad = require('./admin_elements.js'),
    lol = require('../location_logic.js'),
    menu = require('../menu.json');

export const disabledEvent = function () {
    console.log('hi');
    let checks = document.querySelectorAll("input[type='checkbox']");
    checks.forEach(function (e) {
        e.addEventListener('change', addDisable);
    })
}

const addDisable = function () {
    let buns = document.getElementById('bun_option').options;
    let checks = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < buns.length; i++) {
        if (checks[i].checked) {
            buns[i].removeAttribute('disabled');
        } else if (checks[i].checked == false) {
            buns[i].setAttribute('disabled', true);
        }
    }
}

const show = {
    // feed json array and selects to append to create options
    createCheckBoxes: function (array, select) {
      for (let i = 0; i < array.length; i++) {
        let input = document.createElement("input");
        let labels = document.querySelectorAll("#admin label");
        input.type = "checkbox";
        input.value = array[i];
        labels.appendChild(document.createTextNode(array[i]));
        labels.appendChild(input);
      }
    },
    // clear options before changing options for diff location
    clearCheckBoxes: function (array) {
      for (let i = 0; i < array.length; i++) {
        array[i].options.length = 0;
      }
    },
    // loop through each area and selects so options are added to correct place
    attachCheckBoxes: function (area) {
      for (let i = 0; i < el.selects.length; i++) {
        this.createCheckBoxes(lol.bunsFor(area), el.selects[i]);
      }
    }
  }

  const locationCheckValues = function () {
    show.clearCheckBoxes(el.selects);
    if (el.dayton.checked) {
        show.attachOptions("Dayton");
    } else if (el.sandiego.checked) {
        show.attachOptions("San Diego");
    } else {
        show.attachOptions("New York");
    }
  }

const listBunsEvent = function () {
    let radios = document.querySelectorAll("input[type='radio']")
    radios.forEach(function (e) {
        e.addEventListener('change', locationCheckValues);
    })
}

createForm(menu.dy.bun);


module.exports = listBunsEvent;