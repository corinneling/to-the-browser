let { ad } = require('./admin_elements.js');

export const createAdminForm = function (array) {
    ad.admin_form.setAttribute('id', 'admin');
    let order = document.getElementById("orderHotDog");
    let parentDiv = order.parentNode;
    parentDiv.insertBefore(ad.admin_form, order);
    ad.admin_header.appendChild(ad.admin_title);
    ad.admin_form.appendChild(ad.admin_header);
    ad.admin_p.appendChild(ad.admin_text);
    ad.admin_form.appendChild(ad.admin_p);
    for (let i = 0; i < array.length; i++) {
        let boxes = document.createElement("input");
        let labels = document.createElement("label");
        let spans = document.createElement("span");
        boxes.type = "checkbox";
        boxes.value = array[i];
        boxes.name = array[i];
        labels.htmlFor = array[i];
        ad.admin_form.appendChild(labels);
        labels.appendChild(document.createTextNode(array[i]));
        labels.appendChild(boxes);
        // labels.appendChild(spans);
    }
}

// let choose = ["Dayton", "San Diego", "New York"];

// export const createLocationForm = function (array) {
//     let locate = document.createElement('form');
//     locate.setAttribute('id', 'location');
//     let adminform = document.getElementById("admin");
//     let parentDiv = adminform.parentNode;
//     parentDiv.insertBefore(locate, adminform);

//     for (let i = 0; i < array.length; i++) {
//         let boxes = document.createElement("input");
//         let labels = document.createElement("label");
//         boxes.type = "radio";
//         boxes.value = array[i];
//         boxes.name = array[i];
//         labels.htmlFor = array[i];
//         locate.appendChild(labels);
//         labels.appendChild(document.createTextNode(array[i]));
//         locate.appendChild(boxes);
//     }
// }

// createLocationForm(choose);