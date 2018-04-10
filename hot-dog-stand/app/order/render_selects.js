const hotDogCategories = [
    meat = {
        for: "frank_option",
        text: "Meat: *",
        id: "frank_option",
        div: "section_third",
        multi: false,
        size: false
    },
    bun = {
        for: "bun_option",
        id: "bun_option",
        text: "Bun: *",
        div: "section_third",
        multi: false,
        size: false
    },
    con = {
        for: "condiments_option",
        text: "Condiments: *",
        id: "condiments_option",
        div: "section",
        multi: true,
        size: "9"
    }
]

const generateSelects = function () {
    let orderForm = document.getElementById('orderHotDog');
    for (let i = 0; i < hotDogCategories.length; i++) {
        divs = document.createElement('div');
        selects = document.createElement('select');
        labels = document.createElement('label');
        labels.htmlFor = hotDogCategories[i].for;
        labels.appendChild(document.createTextNode(hotDogCategories[i].text));
        selects.id = hotDogCategories[i].id;
        selects.multiple = hotDogCategories[i].multi;
        selects.required = true;
        selects.size = hotDogCategories[i].size;
        divs.className = hotDogCategories[i].div;
        order: document.getElementById("orderHotDog")
        let name = document.getElementById('nameContainer')
        let submit = document.getElementById('submitContainer')
        name.parentNode.insertBefore(divs, submit);
        // orderForm.appendChild(divs);
        divs.appendChild(labels);
        divs.appendChild(selects);
    }
}

module.exports = generateSelects;