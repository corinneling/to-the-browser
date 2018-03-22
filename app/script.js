const { getRanges } = require("./ranges.js");
const { form } = require("./store.js");
const classify = require("./classify.js");
const message = require("./message.js");

const SendTriangle = () => {
  const getInputValues = () =>
    Array.from(form.inputs).map(inputs => inputs.value);

  const addTypeToString = () => {
    let type = classify(getInputValues());
    return message(type);
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
