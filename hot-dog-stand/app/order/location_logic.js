/* 
For location functionality
When location string is passed
Then a json array is returned
*/
let menu = require('./menu.json');

const locationLogic = {
    dogsFor: (location) => { return menu[location].categories.dog },
    bunsFor: (location) => { return menu[location].categories.bun },
    condFor: (location) => { return menu[location].categories.cond },
    sidesFor: (location) => { return menu[location].categories.sides }
}

module.exports = locationLogic;