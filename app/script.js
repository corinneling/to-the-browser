const a = require("indefinite");
const { initRanges } = require("./ranges.js");
const { form } = require("./store.js");
const classify = require("./classify.js");

const SendTriangle = () => {
  const getInputValues = () =>
    Array.from(form.inputs).map(inputs => inputs.value);

  const addTypeToString = () => {
    let type = classify(getInputValues());
    if (type === "imaginary") {
      form.answer.innerHTML =
        "Sorry, that's " + a(`${type}`) + " triangle. Try again!";
    } else {
      form.answer.innerHTML = "You created " + a(`${type}`) + " triangle";
    }
  };

  const showAnswer = () => {
    form.btn.addEventListener("click", addTypeToString);
  };

  return { showAnswer };
};

const send_triangle = SendTriangle();

(function initApplication() {
  send_triangle.showAnswer();
  initRanges();
})();
