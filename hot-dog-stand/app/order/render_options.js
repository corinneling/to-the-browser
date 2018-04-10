/* 
For order functionality
When a location is selected
Then the selects' options for that location are rendered
*/

const menu = require('./menu.json'),
  lol = require('./location_logic.js'),
  el = require('./elements.js'),
  addSideOption = require('./dayton_sides.js'),
  item = [lol.dogsFor, lol.bunsFor, lol.condFor, lol.sidesFor];

let hotDogOptions = null,
    selects = null,
    locationBtn = document.querySelectorAll("input[type='radio']");

// create option values for hot dog form
// feed json array and selects to append to create options
const createOptions = function (array, category) {
  for (let i = 0; i < array.length; i++) {
    hotDogOptions = document.createElement("option");
    hotDogOptions.value = array[i];
    hotDogOptions.text = array[i];
    category.appendChild(hotDogOptions);
  }
}

// clear options before changing options for diff location
const clearOptions = function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i].options.length = 0;
  }
}
// loop through each area and selects so options are added to correct place
const attachOptions = function (area, item) {
  selects = document.querySelectorAll("select");
  for (let i = 0; i < selects.length; i++) {
    createOptions(item[i](area), selects[i]);
  }
}
// set values for options based on which radio btn location chosen
const hotDogOptionsByLocation = function () {
  let selections = document.querySelectorAll("select");
  clearOptions(selections);
  if (locationBtn[0].checked) {
    attachOptions(`sd`, item);
  } else if (locationBtn[1].checked) {
    attachOptions(`ny`, item);
  } else {
    // adds the sides select box for dayton
    addSideOption();
    attachOptions(`dy`, item);
  }
}

// listens for location to be selected
const options = function () {
  locationBtn.forEach(function (e) {
    e.addEventListener('change', hotDogOptionsByLocation);
  })
}

module.exports = options;