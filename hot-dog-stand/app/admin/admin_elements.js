/* 
For admin functionality
stores dom elements to create and manipulate form 
*/
const ad = {
    admin_form: document.createElement("form"),
    contain: document.querySelector('.container'),
    admin_header: document.createElement("h4"),
    admin_title: document.createTextNode(`Choose bun availability`),
    admin_p: document.createElement("p"),
    admin_text: document.createTextNode(`Selected items will be offered today.`),
    order: document.getElementById("orderHotDog")
}

module.exports = ad;