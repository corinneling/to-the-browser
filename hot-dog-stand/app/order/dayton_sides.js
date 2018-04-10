const addSideOption = function () {
    let dy = document.getElementById('DY')
    if (dy.checked) {
        divs = document.createElement('div');
        selects = document.createElement('select');
        labels = document.createElement('label');
        labels.htmlFor = "sides_options";
        labels.appendChild(document.createTextNode("Sides: *"));
        selects.id = "sides_options";
        selects.required = true;
        divs.className = "section";
        let name = document.getElementById('nameContainer')
        let submit = document.getElementById('submitContainer')
        name.parentNode.insertBefore(divs, submit);
        divs.appendChild(labels);
        divs.appendChild(selects);
    }
}

const daytonSidesEvent = function() {
    let dy = document.getElementById('DY')
    dy.addEventListener('change', addSideOption);
}

module.exports = addSideOption;