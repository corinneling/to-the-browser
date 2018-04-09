/* 
For order functionality
When a location is selected
Then the selects' options for that location are rendered
*/

const menu = require('./menu.json'),
  lol = require('./location_logic.js'),
  el = require('./elements.js'),
  item = [lol.dogsFor, lol.bunsFor, lol.condFor];

let hotDogOptions = null,
  locationBtn = document.querySelectorAll("input[type='radio']");

// create option values for hot dog form
const render = {
  // feed json array and selects to append to create options
  createOptions: function (array, category) {
    for (let i = 0; i < array.length; i++) {
      hotDogOptions = document.createElement("option");
      hotDogOptions.value = array[i];
      hotDogOptions.text = array[i];
      category.appendChild(hotDogOptions);
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
const hotDogOptionsByLocation = function () {
  render.clearOptions(el.selects);
  if (locationBtn[0].checked) {
    render.attachOptions(`sd`, item);
  } else if (locationBtn[1].checked) {
    render.attachOptions(`ny`, item);
  } else {
    render.attachOptions(`dy`, item);
  }
}

// listens for location to be selected
const optionsEvent = function () {
  locationBtn.forEach(function (e) {
    e.addEventListener('change', hotDogOptionsByLocation);
  })
}

module.exports = optionsEvent;