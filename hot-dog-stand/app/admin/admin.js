let { createAdminForm } = require('./admin_form.js'), 
    el = require('../elements.js'), 
    { ad } = require('./admin_elements.js'),
    menu = require('../dog.json'),
    adminform = document.getElementById('admin'),
    e_bun = el.bun;

export const disabledEvent = function () {
    console.log('hi');
    createAdminForm(menu.dy.bun);
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

// conflict with the disabled functionality
const removeBunOptions = function () {
    let labels = document.querySelectorAll("#admin label");
    if(labels.lenght < 0) {
        for (var i = 0; i < labels.length; i++) {
            labels[i].remove();
        } 
    }
}

const showCorrectAdminBuns = function () {
    if (el.dayton.checked) {
        removeBunOptions();
        createAdminForm(menu.dy.bun);
        disabledEvent();
    } else if (el.sandiego.checked) {
        removeBunOptions();
        createAdminForm(menu.sd.bun);
        disabledEvent();
    } else {
        removeBunOptions();
        createAdminForm(menu.ny.bun);
        disabledEvent();
    }
}

export const listBunsEvent = function () {
    let radios = document.querySelectorAll("input[type='radio']")
    radios.forEach(function (e) {
        e.addEventListener('change', showCorrectAdminBuns);
    })
}