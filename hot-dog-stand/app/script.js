/* 
Start of App
When the page is loaded
Then admin, form rendering, and order form listener scripts are run
*/

/*
  PROMPT: focus on a data driven application
          instead of rendering stuff then checking the data
          check the data to render stuff
*/

let options = require('./order/render_options.js'),
  disable = require('./admin/admin.js'),
  generateSelects = require('./order/render_selects.js'),
  checkboxes = require('./admin/render_checkboxes.js'),
  showOrder = require('./order/show_order.js'),
  el = require('./order/elements.js'),
  multiSelect = null,
  selects = null;

const createOrder = {
  // put selected condiments into an array
  getMultiSelect: function () {
    multiSelect = document.getElementById('condiments_option');
    for (let i = 0; i < multiSelect.selectedOptions.length; i++) {
      el.condiments.push(multiSelect.selectedOptions[i].value);
    }
  },
  // let dom know the order
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    selects = document.querySelectorAll("select")
    let hotdog = [el.user.value, selects[0].value, selects[1].value, el.condiments];
    el.show.innerHTML = `${showOrder(hotdog)}`;
  },
  // listen for the form to submit
  formSumbit: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

/* -- Start Hot Dog Stand -- */

(function startApp() {
  // render checkboxes for admin controls
    generateSelects();
    checkboxes();
  // admin control over bun options
    disable();
  // attached options to selects based on location
    options();
  // call form event listener 
    createOrder.formSumbit();

})();