/* 
For admin functionality
When a bun type is checked in admin form
Then disabled is added to that bun type in order form
*/

const ad = require('./admin_elements.js'),
    controlDisable = require('./control_disable.js'),
    menu = require('../order/menu.json');

let adminBunList = null,
    orderBunList = null;

// listens for bun list checkboxes to change
const disable = function () {
    adminBunList = document.querySelectorAll("input[type='checkbox']");
    adminBunList.forEach(function (e) {
        e.addEventListener('change', removeDisable);
    })
};

// removes disabled from order form bun list option when reflecting checkbox is checked
const removeDisable = function () {
    orderBunList = document.getElementById('Bun').options;
    for (var i = 0; i < adminBunList.length; i++) {
        if (adminBunList[i].checked) {
            controlDisable(orderBunList[i], true);
        } else if (adminBunList[i].checked == false) {
            controlDisable(orderBunList[i], false);
        }
    }
};

module.exports = disable;