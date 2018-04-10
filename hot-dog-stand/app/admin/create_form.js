/* 
For admin functionality
When admin file is loaded 
Then form shell is created
*/
let ad = require('./admin_elements.js');

const createAdminForm = function () {
    // creates admin form tag, text & appends it before order form
    ad.admin_form.setAttribute('id', 'admin');
    ad.order.parentNode.insertBefore(ad.admin_form, ad.order);
    ad.admin_header.appendChild(ad.admin_title);
    ad.admin_form.appendChild(ad.admin_header);
    ad.admin_p.appendChild(ad.admin_text);
    ad.admin_form.appendChild(ad.admin_p);
}

module.exports = createAdminForm;