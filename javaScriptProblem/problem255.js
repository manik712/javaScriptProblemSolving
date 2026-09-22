//Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1
// potatoes("potatopotato") ➞ 2
// potatoes("potatoapple") ➞ 1

function potatoes(str) {
  let x = str.match(/potato/g); //out put array
  let count = 0;
  for (let i = 0; i <= x.length - 1; i++) {
    count++;
  }
  return count;
}
console.log(potatoes("potastopotatopotato"));
