const { form } = require("./store.js");

export const getRanges = () => {
  form.inputs.forEach(i => {
    i.addEventListener("input", showRangeValues);
  });
};

const showRangeValues = () => {
  for (var i = 0; i < form.inputs.length; i++) {
    form.outputs[i].value = form.inputs[i].value;
  }
};
