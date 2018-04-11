/* 
For order functionality
When the form is submitted
Then the form values are put into an object
*/

let el = require('./elements.js'),
    showOrder = require('./show_order.js');

let multiSelect = null,
    hotdog = null,
    ingredient = null;

// put selected condiments into an array
const getMultiSelect = function () {
    multiSelect = document.getElementById('Condiments');
    for (let i = 0; i < multiSelect.selectedOptions.length; i++) {
        el.condiments.push(multiSelect.selectedOptions[i].value);
    }
}

// add sides value to object if exists
const showSides = function () {
    if (ingredient.length > 3) { return ingredient[3].value }
}

// let dom know the order
const messageConstructor = function (e) {
    e.preventDefault()
    getMultiSelect();
    ingredient = document.querySelectorAll('select');
    let orderSummary = [{
        Customer: el.user.value,
        Order: Math.floor(Math.random() * 100),
        Meat: ingredient[0].value,
        Bun: ingredient[1].value,
        Condiments: el.condiments,
        Sides: showSides()
    }]
    // get showOrder function to display summary
    el.show.innerHTML = `${showOrder(orderSummary)}`;
}

// listen for the form to submit
const formSumbit = function () {
    el.hotdogform.addEventListener("submit", messageConstructor.bind(this));
}

module.exports = formSumbit;