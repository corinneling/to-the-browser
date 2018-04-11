/* 
For admin functionality
When a location is selected
Then renders the bun types for that location 
*/

const disable = require('./disable_inventory.js'),
    location = require('../order/data_logic.js'),
    ad = require('./admin_elements.js'),
    menu = require('../order/menu.json');

let areaBtns = null,
    bunTypes = null;

// render bun types based on json data with location parameter
const renderCheckboxes = function (json) {
    // creates the checkboxes, labels, and container divs
    let bunOptions = json[1].options;
    for (var i = 0; i < bunOptions.length; i++) {
        let boxes = document.createElement("input"),
            labels = document.createElement("label"),
            divs = document.createElement("div");
        divs.className = "adminControls"
        boxes.type = "checkbox";
        boxes.setAttribute('id', `${i}`);
        labels.setAttribute('for', `${i}`);
        ad.admin_form.appendChild(divs);
        divs.appendChild(boxes);
        divs.appendChild(labels);
        let object = json[1].options[i];
        labels.appendChild(document.createTextNode(object));
    }
    // after checkboxes are created load disable functionality
    disable();
}

// removes all checkbox elements
const clearBunOptions = function () {
    bunTypes = document.querySelectorAll(".adminControls");
    for (let i = 0; i < bunTypes.length; i++) {
        bunTypes[i].remove();
    }
}
// renders appropriate bun types based on location chosen
const bunsByArea = function () {
    clearBunOptions();
    if (areaBtns[0].checked) {
        renderCheckboxes(location('ny'));
    } else if (areaBtns[1].checked) {
        renderCheckboxes(location('sd'));
    } else {
        renderCheckboxes(location('dy'));
    }
}

// listens to radio buttons 
const bunInventory = function () {
    areaBtns = document.querySelectorAll('input[type=radio]');
    areaBtns.forEach(function (e) {
        e.addEventListener('change', bunsByArea)
    })
}
module.exports = bunInventory;