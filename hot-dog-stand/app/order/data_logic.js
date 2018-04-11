/* 
For location functionality
When location string is passed
Then a json array is returned
*/

let menu = require('./menu.json');

// returns the correct location data when given a location parameter
const location = function (area) {
    let json = menu[area].categories;
    return json;
}

// set up a function that can be tested to throw errors
const validateValues = function (data) {
    for(let x in data) {
        let object = data[x].categories
        for(let i in object) {
            let categories = object[i];
            if(object[i].options.length < 1 || typeof object[i].id !== 'string') {
                console.log('json id or options values are not valid')
            } else {
                console.log('data looks good');
            }
        }
    }
}

validateValues(menu);

module.exports = location;