/* 
For order functionality
When a location is chosen
Then selects are rendered based on json data
*/

const menu = require('./menu.json'),
    location = require('./data_logic.js'),
    name = document.getElementById('nameContainer'),
    submit = document.getElementById('submitContainer');

let areaBtns = null;

// render selects based on json data with location parameter
const rednerSelects = function (json) {
    for (let i in json) {
        let object = json[i],
            category = document.createElement('select'),
            title = document.createElement('label'),
            divs = document.createElement('div');
        divs.className = "categories";
        category.id = json.id;
        category.size = json.size;
        name.parentNode.insertBefore(divs, submit);
        divs.appendChild(title)
        divs.appendChild(category)
        // trigger addSettings below
        addSettings(object, category, title);
    }
}

// add attributes and options
const addSettings = function (object, category, title) {
    for (let key in object) {
        let setValues = category.setAttribute(key, object[key]);
        switch (key) {
            // give label matching id, for, and text for selects
            case 'id':
                setValues;
                title.setAttribute('for', object[key])
                title.appendChild(document.createTextNode(object[key] + ': *'));
                break;
            // create options for each selects
            case 'options':
                for (let x = 0; x < object[key].length; x++) {
                    let ingredientValues = document.createElement('option');
                    ingredientValues.text = object[key][x];
                    category.appendChild(ingredientValues)
                }
                break;
            // add multiple to selects
            case 'multiple':
                setValues;
                break;
            // add size of multiple selects
            case 'size':
                setValues;
                break;
            default:
                return null;
        }
    }
}

// removes all select elements
const clearSelects = function () {
    categoryTypes = document.querySelectorAll('.categories');
    for (let i = 0; i < categoryTypes.length; i++) {
        categoryTypes[i].remove();
    }
}

// renders appropriate selects based on location chosen
const selectsByArea = function () {
    clearSelects();
    if (areaBtns[0].checked) {
        rednerSelects(location('ny'))
    } else if (areaBtns[1].checked) {
        rednerSelects(location('sd'))
    } else {
        rednerSelects(location('dy'))
    }
}

// listens to radio buttons 
const optionsByArea = function () {
    areaBtns = document.querySelectorAll('input[type=radio]');
    areaBtns.forEach(function (e) {
        e.addEventListener('change', selectsByArea)
    })
}


module.exports = optionsByArea;