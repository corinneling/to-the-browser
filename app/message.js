const a = require("indefinite");
const { form } = require("./store.js");

const messageConstructor = i => {
  if (i === "imaginary") {
    form.answer.innerHTML =
      "Sorry, that's " + a(`${i}`) + " triangle. Try again!";
  } else {
    form.answer.innerHTML = "You created " + a(`${i}`) + " triangle";
  }
};
module.exports = messageConstructor;
