/* 
Start of App
When the page is loaded
Then admin, form rendering, and order form listener scripts are run
*/

const createForm = require('./admin/create_form.js'),
  bunEvent = require('./admin/render_buns.js'),
  areaEvent = require('./order/render_ingredients.js'),
  showOrder = require('./order/show_order.js'),
  el = require('./order/elements.js');

let multiSelect = null,
  selects = null;

const createOrder = {
  // put selected condiments into an array
  getMultiSelect: function () {
    multiSelect = document.getElementById('Condiments');
    for (let i = 0; i < multiSelect.selectedOptions.length; i++) {
      el.condiments.push(multiSelect.selectedOptions[i].value);
    }
  },
  // let dom know the order
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    let selects = document.querySelectorAll('select');
    let hotdog = [
      el.user.value,
      selects[0].value,
      selects[1].value,
      el.condiments
    ];
    // add sides to show order 
    if (selects.length > 3) {
      hotdog.push(selects[3].value)
    }
    // get showOrder function to display summary
    el.show.innerHTML = `${showOrder(hotdog)}`;
  },
  // listen for the form to submit
  formSumbit: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

/* -- Start Hot Dog Stand -- */

(function startApp() {
  // create admin form
  createForm();
  // render content based on location
  areaEvent();
  // render admin content based on location
  bunEvent();
  // call form event listener 
  createOrder.formSumbit();
})();