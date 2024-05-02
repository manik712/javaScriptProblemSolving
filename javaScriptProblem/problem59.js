/*

Create a function that takes an angle in radians 
and returns the corresponding angle in degrees.

*/
function radiansToDeg(radians) {
  const myRadians = radians;
  const angle = myRadians * (180 / Math.PI);
  return angle;
}

console.log(radiansToDeg(11));
