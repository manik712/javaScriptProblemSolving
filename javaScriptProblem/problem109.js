/*

string and number 

*/
function numOrString(arr) {
  let str = [];
  let num = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      str.push(arr[i]);
    } else if (typeof arr[i] === "number") {
      num.push(arr[i]);
    }
  }
  return { num: num, str: str };
}

console.log(numOrString([1, 2, 3, "am", "are", 6, 10]));
