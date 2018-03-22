const a = require("indefinite");
const { getRanges } = require("./ranges.js");
const { form } = require("./store.js");
const classify = require("./classify.js");

const SendTriangle = () => {
  const getInputValues = () =>
    Array.from(form.inputs).map(inputs => inputs.value);

  const addTypeToString = () => {
    let type = classify(getInputValues());
    // let message = aMessageDecision(type);

    if(type === 'imaginary'){
      form.answer.innerHTML = "Sorry, that's " + a(`${type}`) + " triangle. Try again!";
    } else {
      form.answer.innerHTML = "You created " + a(`${type}`) + " triangle";
    }
  };

  const showAnswer = () => {
    form.btn.addEventListener("click", addTypeToString);
  };

  return { showAnswer };
};


(function initApplication() {
  SendTriangle().showAnswer();
  getRanges();
})();
