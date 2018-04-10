/* 
For admin functionality
When admin file is loaded 
Then form shell is created
*/
let ad = require('./admin_elements.js');

const createAdminForm = function (array) {
    /*
         creates form tag, text & appends it before order form
    */
    ad.admin_form.setAttribute('id', 'admin');
    ad.order.parentNode.insertBefore(ad.admin_form, ad.order);
    ad.admin_header.appendChild(ad.admin_title);
    ad.admin_form.appendChild(ad.admin_header);
    ad.admin_p.appendChild(ad.admin_text);
    ad.admin_form.appendChild(ad.admin_p);
    /*
         creates the checkboxes
    */
    createCheckboxes(array);
}

const createCheckboxes = function (array) {
    /*
         creates the checkboxes, labels, and container divs
    */
    for (let i = 0; i < array.length; i++) {
        let boxes = document.createElement("input"),
            labels = document.createElement("label"),
            divs = document.createElement("div");
        boxes.type = "checkbox";
        boxes.setAttribute('id', `${i}`);
        labels.setAttribute('for', `${i}`);
        ad.admin_form.appendChild(divs);
        divs.appendChild(boxes);
        divs.appendChild(labels);
    }
}

module.exports = createAdminForm;