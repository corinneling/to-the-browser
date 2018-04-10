let menu = require('./menu.json'),
    areaBtns = null;

// id = string
// options = array
// method requires both
// multiple = boolean (optional)
// size = string (optional)
// throws errors 
const generateSelect = function (settings) {
    // settings = id, key, area
}

// set up a function that can be tested to throw errors
const validate = function () {

}

const generateSelects = function (area) {
    let name = document.getElementById('nameContainer'),
        submit = document.getElementById('submitContainer');
    for (let i in menu[area].categories) {
        let object = menu[area].categories[i],
            category = document.createElement('select'),
            title = document.createElement('label'),
            divs = document.createElement('div');
        divs.className = "categories";
        category.id = menu[area].categories.id;
        category.size = menu[area].categories.size;
        name.parentNode.insertBefore(divs, submit);
        divs.appendChild(title)
        divs.appendChild(category)
        // move most of this into other func
        addTags(object, category, title);
    }
}

const addTags = function (object, category, title) {
    for (let key in object) {
        // adds select id, label for, and label text (all the same)
        switch (key) {
            case 'id':
                category.setAttribute(key, object[key])
                title.setAttribute('for', object[key])
                title.appendChild(document.createTextNode(object[key] + ': *'));
                break;
            case 'options':
                for (let x = 0; x < object[key].length; x++) {
                    let ingredients = document.createElement('option');
                    ingredients.text = object[key][x];
                    category.appendChild(ingredients)
                }
                break;
            case 'multiple':
                category.setAttribute(key, object[key])
                break;
            case 'size':
                category.setAttribute(key, object[key])
                break;
            default:
                return null;
        }
    }
}

const clearSelects = function () {
    categoryTypes = document.querySelectorAll('.categories');
    for (let i = 0; i < categoryTypes.length; i++) {
        categoryTypes[i].remove();
    }
}

const selectsByArea = function () {
    clearSelects();
    if (areaBtns[0].checked) {
        generateSelects('ny')
    } else if (areaBtns[1].checked) {
        generateSelects('sd')
    } else {
        generateSelects('dy')
    }
}

const areaEvent = function () {
    areaBtns = document.querySelectorAll('input[type=radio]');
    areaBtns.forEach(function (e) {
        e.addEventListener('change', selectsByArea)
    })
}


module.exports = areaEvent;