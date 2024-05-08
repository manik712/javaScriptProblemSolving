/*


Write a function that accepts base (decimal),
height (decimal) and shape ("triangle", "parallelogram")
as input and calculates the area of that shape.


*/

function areaShape(b, h, shape) {
  if (shape == "triangle") {
    return "Area of triangle is" + " " + b * h+" "+"decimal"+"^2";
  } else if (shape == "parallelogram") {
    return "Area of parallelogram is" + " " + (1 / 2) * h * b+" "+"decimal"+"^2";
  }
}

console.log(areaShape(3, 3, "parallelogram"));
