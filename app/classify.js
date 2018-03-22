const classifyTriangle = value => {
  let [side1, side2, side3] = value;

  let type = null;
  if(side1 + side2 <= side3) {
    type = "imaginary"
  } else if (side1 == side2 && side2 == side3) {
    type = "equilateral";
  } else if (side1 == side2 || side2 == side3 || side1 == side3) {
    type = "isosceles";
  } else {
    type = "scalene";
  }
  return type;
};

module.exports = classifyTriangle;
