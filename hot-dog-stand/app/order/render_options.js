/* 
For order functionality
When a location is selected
Then renders select's options for that location 
*/
let menu = require('./menu.json'),
    lol = require('./location_logic.js'),
    el = require('./elements.js'),
    item = [lol.dogsFor, lol.bunsFor, lol.condFor];

// create option values for hot dog form
const render = {
  // feed json array and selects to append to create options
  createOptions: function (array, select) {
    for (let i = 0; i < array.length; i++) {
      let option = document.createElement("option");
      option.value = array[i];
      option.text = array[i];
      select.appendChild(option);
    }
  },
  // clear options before changing options for diff location
  clearOptions: function (array) {
    for (let i = 0; i < array.length; i++) {
      array[i].options.length = 0;
    }
  },
  // loop through each area and selects so options are added to correct place
  attachOptions: function (area, item) {
    for (let i = 0; i < el.selects.length; i++) {
      this.createOptions(item[i](area), el.selects[i]);
    }
  }
}

// set values for options based on which radio btn location chosen
const locationChooseValues = function () {
  render.clearOptions(el.selects);
  if (el.dayton.checked) {
    render.attachOptions("Dayton", item);
  } else if (el.sandiego.checked) {
    render.attachOptions("San Diego", item);
  } else {
    render.attachOptions("New York", item);
  }
}

const optionsEvent = function () {
  el.rad.forEach(function (e) {
    e.addEventListener('change', locationChooseValues);
  })
}

module.exports = optionsEvent;