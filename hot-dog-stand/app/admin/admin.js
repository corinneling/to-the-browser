let { createAdminForm } = require('./admin_form.js'), 
    { el } = require('../elements.js'),
    menu = require('../dog.json'),
    e_bun = el.bun;

export const disabledEvent = function () {
    createAdminForm(menu.dy.bun);
    let checks = document.querySelectorAll("input[type='checkbox']");
    checks.forEach(function (e) {
        e.addEventListener('change', addDisable);
    })
}

const addDisable = function () {
    const buns = document.getElementById('bun_option').options;
    let checks = document.querySelectorAll("input[type='checkbox']");
    for (var i = 0; i < buns.length; i++) {
        if (checks[i].checked ) {
            buns[i].removeAttribute('disabled');
        } else if (checks[i].checked == false ){
            buns[i].setAttribute('disabled', true);
        }
    }
}

// doesnt work yet
// conflict with the disabled functionality
const removeBunOptions = function () {
    let labels = document.querySelectorAll("#admin label");
    for (var i = 0; i < labels.length; i++) {
        labels[i].remove();
    }
}

const showCorrectAdminBuns = function () {
    if (el.dayton.checked) {
        removeBuns();
        createAdminForm(menu.dy.bun);
    } else if (el.sandiego.checked) {
        removeBuns();
        createAdminForm(menu.sd.bun);
    } else {
        removeBuns();
        createAdminForm(menu.ny.bun);
    }
}

const listBunsEvent = function () {
    el.rad.forEach(function (e) {
        e.addEventListener('change', showAdminBun);
    })
}