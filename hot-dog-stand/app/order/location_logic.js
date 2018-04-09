/* 
For location functionality
When location string is passed
Then a json array is returned
*/
let menu = require('./menu.json');

const locationLogic = {
    dogsFor: (location) => { return menu[location].dog },
    bunsFor: (location) => { return menu[location].bun },
    condFor: (location) => { return menu[location].cond }
}

module.exports = locationLogic;