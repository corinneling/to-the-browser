const el = {
    show: document.getElementById('your_order'),
    user: document.getElementById('user_name'),
    option: document.createElement("option"),
    dayton: document.getElementById("DY"),
    sandiego: document.getElementById("SD"),
    rad: document.querySelectorAll("input[type='radio']"),
    multiSelect: document.getElementById('condiments_option'),
    selects: document.querySelectorAll("select"),
    option: document.createElement("option"),
    hotdogform: document.forms.orderHotDog,
    condiments: []
}

module.exports = el;