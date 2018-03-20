const a = require('indefinite');

let tri = {
  outputs: document.querySelectorAll('output'),
  inputs: document.querySelectorAll("input[type=range]"),
  btn: document.getElementById('submitBtn'),
  answer: document.getElementById('triangleType')
}
tri.iValues = Array.from(tri.inputs).map(inputs => inputs.value);

startListeners = _ => {
  tri.btn.addEventListener("click", showAnswer);
  tri.inputs.forEach((i) => {
        i.addEventListener('input', showRangeValues);
  });
};

showRangeValues = _ => {
   for (var i=0; i<tri.inputs.length; i++) {
      tri.outputs[i].value = tri.inputs[i].value;
    };
  };

getInputValues = _ => Array.from(tri.inputs).map(inputs => inputs.value);


classifyTriangle = _ => {
  let [ aa, b, c ] = tri.iValues;

  let type = null;
  if (a == b && b == c){
    type = 'equilateral';
	} else if(a == b || b == c || a == c) {
    type = 'isosceles';
	} else {
    type = 'scalene';
	};
  return type;
};

 showAnswer = _ => {
   let type = classifyTriangle();
   tri.answer.innerHTML = "You created " + a(`${type}`) + " triangle";
 };

startListeners();
// so cool!
// questions:
/*
  1. what is the different bw Array.prototype.map and .map
  2. need help with getInputValues
  3. how does bundle.js work? do you have to run npx webpack everytime you make an update
  4. whats the difference bw dependencies and devDependencies
*/
