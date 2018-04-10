let menu = require('./menu.json'),
     areaBtns = null;

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
        for (let tag in object) {
            if (tag == "id") {
                category.setAttribute(tag, object[tag])
                title.setAttribute('for', object[tag])
                title.appendChild(document.createTextNode(object[tag] + ": *"));
            } else if (tag == "options") {
                for (let x = 0; x < object[tag].length; x++) {
                    let ingredients = document.createElement('option');
                    ingredients.text = object[tag][x];
                    category.appendChild(ingredients)
                }
            } else if(tag == "multiple") {
                category.setAttribute(tag, object[tag])
            }  else if(tag == "size") {
                category.setAttribute(tag, object[tag])
            }
        }
    }
}

const clearSelects = function () {
    categoryTypes = document.querySelectorAll(".categories");
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