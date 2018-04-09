/* 
For admin functionality
When a bun type is checked in admin form
Then disabled is added to that bun type in order form
*/
let createForm = require('./create_form.js'),
    menu = require('../order/menu.json');

const disabledEvent = function () {
    createForm(menu.dy.bun);
    let checks = document.querySelectorAll("input[type='checkbox']");
    checks.forEach(function (e) {
        e.addEventListener('change', addDisable);
    })
}

const addDisable = function () {
    let buns = document.getElementById('bun_option').options;
    let checks = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < buns.length; i++) {
        if (checks[i].checked) {
            buns[i].removeAttribute('disabled');
        } else if (checks[i].checked == false) {
            buns[i].setAttribute('disabled', true);
        }
    }
}

module.exports = disabledEvent;