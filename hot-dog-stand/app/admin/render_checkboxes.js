let el = require('../order/elements.js'),
    ad = require('./admin_elements.js'),
    lol = require('../order/location_logic.js'),
    createForm = require('./create_form.js'), 
    menu = require('../order/menu.json');

// feed json array and selects to append to create options
const createCheckBoxes = function (array) {
    for (let i = 0; i < array.length; i++) {
        let labels = document.querySelectorAll("#admin label");
        let inputs = document.querySelectorAll("input[type=checkbox]");
        inputs.value = array[i];
        inputs.name = array[i];
        labels[i].innerHTML = array[i];
    }
}

const clearCheckBoxes = function () {
    let labels = document.querySelectorAll("#admin label");
    for (let i = 0; i < labels.length; i++) {
        console.log(labels[i].innerHTML)
        labels[i].innerHTML = "";
    }
  }

// display checkbox values based on area
const locationCheckValues = function () {
    clearCheckBoxes();
    if (el.dayton.checked) {
        createCheckBoxes(lol.bunsFor("Dayton"))
    } else if (el.sandiego.checked) {
        createCheckBoxes(lol.bunsFor("San Diego"))
    } else {
        createCheckBoxes(lol.bunsFor("New York"))
    }
}

// listens for location radio buttons to change
const listBunsEvent = function () {
    let radios = document.querySelectorAll("input[type='radio']")
    radios.forEach(function (e) {
        e.addEventListener('change', locationCheckValues);
    })
}

module.exports = listBunsEvent;