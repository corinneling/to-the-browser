/* 
Start of App
When the page is loaded
Then admin, form rendering, and order form listener scripts are run
*/

/*
  PROMPT: focus on a data driven application
          instead of rendering stuff then checking the data
          check the data to render stuff
          ex. if json array is > 0, create options for that data
*/

let disable = require('./admin/admin.js'),
  createForm = require('./admin/create_form.js'),
  bunEvent = require('./admin/render_checkboxes.js'),
  areaEvent = require('./order/create_selects.js'),
  showOrder = require('./order/show_order.js'),
  el = require('./order/elements.js'),
  multiSelect = null,
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
    selects = document.querySelectorAll("select");
    let hotdog = [el.user.value];
    for(var i = 0; i < selects.length; i++) {
      hotdog.push(selects[i].value);
    }
    el.show.innerHTML = `${showOrder(hotdog)}`;
  },
  // listen for the form to submit
  formSumbit: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

/* -- Start Hot Dog Stand -- */

(function startApp() {
  createForm();
  // render checkboxes for admin controls
  areaEvent();
  bunEvent();
  // admin control over bun options
  // disable();
  // call form event listener 
  createOrder.formSumbit();
})();