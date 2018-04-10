/* 
For admin functionality
When a location is selected
Then renders the checkbox's label text for that location 
*/

const ad = require('./admin_elements.js'),
    lol = require('../order/location_logic.js');

let bunLabels = null,
    bunInputs = null,
    locationBtn = document.querySelectorAll("input[type='radio']");
// feed json array and selects to append to create options
const createBunList = function (array) {
    for (let i = 0; i < array.length; i++) {
        bunLabels = document.querySelectorAll("#admin label");
        bunInputs = document.querySelectorAll("input[type=checkbox]");
        bunInputs.value = array[i];
        bunInputs.name = array[i];
        bunLabels[i].innerHTML = array[i];
    }
}
// clear options before changing options for diff location
const clearBunList = function () {
    bunLabels = document.querySelectorAll("#admin label");
    for (let i = 0; i < bunLabels.length; i++) {
        bunLabels[i].innerHTML = "";
    }
}
// display checkbox values based on area
const bunListByLocation = function () {
    clearBunList();
    if (locationBtn[0].checked) {
        createBunList(lol.bunsFor("sd"))
    } else if (locationBtn[1].checked) {
        createBunList(lol.bunsFor("ny"))
    } else {
        createBunList(lol.bunsFor("dy"))
    }
}
// listens for location radio buttons to change
const listBunsEvent = function () {
    locationBtn.forEach(function (e) {
        e.addEventListener('change', bunListByLocation);
    })
}

module.exports = listBunsEvent;