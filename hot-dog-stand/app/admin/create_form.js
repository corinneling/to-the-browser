let ad = require('./admin_elements.js');

const createAdminForm = function (array) {
    ad.admin_form.setAttribute('id', 'admin');
    let order = document.getElementById("orderHotDog");
    let parentDiv = order.parentNode;
    parentDiv.insertBefore(ad.admin_form, order);
    ad.admin_header.appendChild(ad.admin_title);
    ad.admin_form.appendChild(ad.admin_header);
    ad.admin_p.appendChild(ad.admin_text);
    ad.admin_form.appendChild(ad.admin_p);
    let adminform = document.getElementById('admin');
    createCheckboxes(array);
}

const createCheckboxes = function (array) {
    for (let i = 0; i < array.length; i++) {
        let boxes = document.createElement("input");
        let labels = document.createElement("label");
        let divs = document.createElement("div");
        boxes.type = "checkbox";
        boxes.setAttribute('id', `${i}`);
        labels.setAttribute('for', `${i}`);
        ad.admin_form.appendChild(divs);
        divs.appendChild(boxes);
        divs.appendChild(labels);
    }
}

module.exports = createAdminForm;