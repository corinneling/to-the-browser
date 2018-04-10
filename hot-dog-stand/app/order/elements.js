/* 
For order functionality
stores dom elements to create and manipulate form 
*/
const el = {
    show: document.getElementById('your_order'),
    user: document.getElementById('user_name'),
    option: document.createElement("option"),
    rad: document.querySelectorAll("input[type='radio']"),
    option: document.createElement("option"),
    hotdogform: document.forms.orderHotDog,
    condiments: []
}

module.exports = el;