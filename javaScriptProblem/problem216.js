//Create a function that calculates the area of a rectangle. If either the height or width is zero or negative, return -1.

function areaOfRectangle(hight, width) {
  if (hight <= 0 || width <= 0) {
    return -1;
  } else {
    const x = hight * width;
    return x;
  }
}

console.log(areaOfRectangle(5, 0));
