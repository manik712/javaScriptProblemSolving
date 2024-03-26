//find out the largest string from a array and index number
const boys = ["manik", "manikSarker", "arnob"];
function largestString() {
  let largestString = "";

  for (let boy of boys) {
    if (boy.length > largestString.length) {
      largestString = boy;
    }
  }
  return [largestString, boys.indexOf(largestString)];
}
console.log(largestString());
