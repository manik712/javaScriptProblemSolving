/*

Given two arrays, which represent two sandwiches, return whether both
sandwiches use the same type of bread. The bread will always be found 
at the start and end of the array.

*/

function hasSameBread(sandwich1, sandwich2) {
  // Check if the first and last elements of both arrays are the same
  return sandwich1[0] === sandwich2[0] && sandwich1[sandwich1.length - 1] === sandwich2[sandwich2.length - 1];
}

// Test the function
console.log(hasSameBread(
  ["white bread", "lettuce", "white bread"],
  ["white bread", "tomato", "white bread"]
)); // Output: true
