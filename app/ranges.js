const { form } = require("./store.js");

const RangesFunctionality = () => {
  const getRanges = () => {
    form.inputs.forEach(i => {
      i.addEventListener("input", showRangeValues);
    });
  };

  const showRangeValues = () => {
    for (var i = 0; i < form.inputs.length; i++) {
      form.outputs[i].value = form.inputs[i].value;
    }
  };
  return { getRanges };
};

const make_interactive = RangesFunctionality();

export const initRanges = () => {
  make_interactive.getRanges();
};
