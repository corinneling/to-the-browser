/* 
For admin functionality
When a bun type is checked in admin form
Then disabled is added to that bun type in order form
*/

const createForm = require('./create_form.js'),
    ad = require('./admin_elements.js'),
    menu = require('../order/menu.json');

let adminBunList = null,
    orderBunList = null;

// listens for bun list checkboxes to change
const disable = function () {
    createForm(menu.dy.bun);
    adminBunList = document.querySelectorAll("input[type='checkbox']");
    adminBunList.forEach(function (e) {
        e.addEventListener('change', removeDisable);
    })
};

// removes disabled from order form bun list option when reflecting checkbox is checked
const removeDisable = function () {
    orderBunList = document.getElementById('bun_option').options;
    for (var i = 0; i < adminBunList.length; i++) {
        if (adminBunList[i].checked) {
            orderBunList[i].removeAttribute('disabled');
        } else if (adminBunList[i].checked == false) {
            orderBunList[i].setAttribute('disabled', true);
        }
    }
};

module.exports = disable;