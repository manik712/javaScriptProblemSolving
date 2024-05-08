/*
Here's an image of four models. Some of the cubes 
are hidden behind other cubes. Model one
consists of one cube. Model two consists of
four cubes, and so on...




Write a function that takes a number n
and returns the number of stacked boxes
in a model n levels high, visible and 
invisible.

*/




// const stackBoxes = (n) => Math.pow(n, 2);
// console.log(stackBoxes(1));





function stackBoxes(n) {
  if (n < 0) {
    return "Stacked boxes number would not be negative!";
  }else{
    return Math.pow(n, 2);
  }
}

console.log(stackBoxes(4));