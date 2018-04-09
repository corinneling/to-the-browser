let options = require('../order/render_options.js'),
  // listBunsEvent = require('./admin/admin.js'),
  showOrder = require('../order/show_order.js'),
  el = require('../order/elements.js');

const createOrder = {
  // put selected condiments into an array
  getMultiSelect: function () {
    for (let i = 0; i < el.multiSelect.selectedOptions.length; i++) {
      el.condiments.push(el.multiSelect.selectedOptions[i].value);
    }
  },
  // let dom know the order
  messageConstructor: function (e) {
    e.preventDefault()
    this.getMultiSelect();
    let hotdog = [el.user.value, el.selects[0].value, el.selects[1].value, el.condiments];
    el.show.innerHTML = `${showOrder(hotdog)}`;
  },
  // listen for the form to submit
  formSumbit: function () {
    el.hotdogform.addEventListener("submit", this.messageConstructor.bind(this));
  }
};

/* -- Start Hot Dog Stand -- */

(function startApp() {
  // admin control over bun options
  // listBunsEvent();
  // attached options to selects based on location
  options();
  // call form event listener 
  createOrder.formSumbit();
})();