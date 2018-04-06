const el = {
    order: document.forms.orderHotDog,
    show: document.getElementById('your_order'),
    user: document.getElementById('user_name'),
    dog: document.getElementById('frank_option'),
    bun: document.getElementById('bun_option'),
    cond: document.getElementById('condiments_option'),
    option: document.createElement("option"),
    dayton: document.getElementById("DY"),
    sandiego: document.getElementById("SD"),
    rad: document.querySelectorAll("input[type='radio']"),
    multiSelect: document.getElementById('condiments_option'),
    hotdogform: document.forms.orderHotDog,
    condiments:[]
}

module.exports = el;