/* 
Start of Program
*/

const adminForm = require('./admin/create_form.js'),
  bunInventory = require('./admin/render_buns.js'),
  optionsByArea = require('./order/render_ingredients.js'),
  formSumbit = require('./order/form_submit.js');

(function startApp() {
  // create admin form
  adminForm();
  // render form content based on location
  optionsByArea();
  // render bun types for admin based on location
  bunInventory();
  // listen for form submit
  formSumbit();
})();