/*



Create a function that takes a number and return an array of
three numbers: half of the number, quarter of the number and
an eighth of the number.



Examples
halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]


*/

function halfQuarterEighth(num) {
  let arr = [];
  if (num > 0) {
    let halt = num / 2;
    arr.push(halt);
    let quarter = num / 4;
    arr.push(quarter);
    let eighth = num / 8;
    arr.push(eighth);
  }
  return arr;
}
console.log(halfQuarterEighth(6));
