/* 
For admin functionality
When a location is selected
Then renders the checkbox's label text for that location 
*/

let areaBtns = null,
    disable = require('./admin.js'),
    ad = require('./admin_elements.js'),
    menu = require('../order/menu.json');

const createCheckboxes = function (area) {
    // creates the checkboxes, labels, and container divs
    let bunOptions = menu[area].categories[1].options;
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
        let object = menu[area].categories[1].options[i];
        labels.appendChild(document.createTextNode(object));
        }
        disable();
    }


const clearBunOptions = function () {
    bunTypes = document.querySelectorAll(".adminControls");
    for (let i = 0; i < bunTypes.length; i++) {
        bunTypes[i].remove();
    }
}


const bunsByArea = function () {
    clearBunOptions();
    if (areaBtns[0].checked) {
        createCheckboxes('ny');
    } else if (areaBtns[1].checked) {
        createCheckboxes('sd');
    } else {
        createCheckboxes('dy');
    }
}

const bunEvent = function () {
    areaBtns = document.querySelectorAll('input[type=radio]');
    areaBtns.forEach(function (e) {
        e.addEventListener('change', bunsByArea)
    })
}
module.exports = bunEvent;