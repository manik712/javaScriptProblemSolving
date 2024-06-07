/*
Create a function that takes a whole number as input
 and returns the shape with that number's amount of 
 sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10 "decagon"


*/

function nSides(result) {
  switch (result) {
    case 1:
      result = "circle";
      return result;

    case 2:
      result = "semi-circle";
      return;
      break;
    case 3:
      result = "triangle";
      return result;
      break;
    case 4:
      result = "square";
      return result;
      break;
    case 5:
      result = "pentagon";
      return result;
      break;
    case 6:
      result = "hexagon";
      return result;
      break;
    case 7:
      result = "heptagon";
      return result;
      break;
    case 8:
      result = "octagon";
      return result;
      break;
    case 9:
      result = "nonagon";
      return result;
      break;
    case 10:
      result = "decagon";
      return result;

    default:
      return "unknown shape";
  }
}
console.log(nSides(6));
