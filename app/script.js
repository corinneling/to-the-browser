const a = require("indefinite");

let triangle = {
  outputs: document.querySelectorAll("output"),
  inputs: document.querySelectorAll("input[type=range]"),
  btn: document.getElementById("submitBtn"),
  answer: document.getElementById("triangleType")
};

const startListeners = _ => {
  triangle.btn.addEventListener("click", showAnswer);
  getRanges();
};

const getRanges = _ => {
  triangle.inputs.forEach(i => {
    i.addEventListener("input", showRangeValues);
  });
};

const showRangeValues = _ => {
  for (var i = 0; i < triangle.inputs.length; i++) {
    triangle.outputs[i].value = triangle.inputs[i].value;
  }
};

const getInputValues = _ =>
  Array.from(triangle.inputs).map(inputs => inputs.value);

const classifyTriangle = _ => {
  let [side1, side2, side3] = getInputValues();

  let type = null;
  if (side1 == side2 && side2 == side3) {
    type = "equilateral";
  } else if (side1 == side2 || side2 == side3 || side1 == side3) {
    type = "isosceles";
  } else {
    type = "scalene";
  }
  return type;
};

const showAnswer = _ => {
  let triangle_type = classifyTriangle();
  triangle.answer.innerHTML =
    "You created " + a(`${triangle_type}`) + " triangle";
};

startListeners();

module.exports = classifyTriangle();

// questions:
/*
  1. how does bundle.js work? do you have to run npx webpack everytime you make an update
  2. whats the difference bw dependencies and devDependencies
*/
