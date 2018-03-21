const a = require("indefinite");

let triangle = {
  outputs: document.querySelectorAll("output"),
  inputs: document.querySelectorAll("input[type=range]"),
  btn: document.getElementById("submitBtn"),
  answer: document.getElementById("triangleType")
};

const CreateRangesFunctionality = () => {
  const getRanges = () => {
    triangle.inputs.forEach(i => {
      i.addEventListener("input", showRangeValues);
    });
  };

  const showRangeValues = () => {
    for (var i = 0; i < triangle.inputs.length; i++) {
      triangle.outputs[i].value = triangle.inputs[i].value;
    }
  };
  return { getRanges };
};

const CreateTriangle = () => {
  const getInputValues = () =>
    Array.from(triangle.inputs).map(inputs => inputs.value);

  const classifyTriangle = (value) => {
    let [side1, side2, side3] = value;

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

  const addTypeToString = () => {
    let triangle_type = classifyTriangle(getInputValues());
    triangle.answer.innerHTML =
      "You created " + a(`${triangle_type}`) + " triangle";
  };

  const showAnswer = () => {
    triangle.btn.addEventListener("click", addTypeToString);
  };

  return { showAnswer };
};

const visible_ranges = CreateRangesFunctionality();
const which_triangle = CreateTriangle();

(function startListeners() {
  which_triangle.showAnswer();
  visible_ranges.getRanges();
})();
