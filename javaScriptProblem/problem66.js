/*

Create a function that accepts a measurement
value in inches and returns the equivalent of 
the measurement value in feet.


*/

function inchesToFeet(value) {
  const myInches = value;
  if (myInches < 12) {
    return 0;
  } else {
    const myFeet = myInches / 12;
    return myFeet + " " + "Feet";
  }
}

console.log(inchesToFeet(12));
