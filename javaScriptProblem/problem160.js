/*


Create a function that counts how many D's are in a sentence.
Examples

countDs("My friend Dylan got distracted in school.") ➞ 4

countDs("Debris was scattered all over the yard.") ➞ 3

countDs("The rodents hibernated in their den.") ➞ 3


*/

function countD(str) {
  let myCount = str.toLowerCase();
  let reg = /[d]/g;
  let count1 = myCount.match(reg);
  // let count2 = count1.length;
  // return count2;

  if (count1 !== null) {
    return count1.length;
  } else {
    return 0;
  }
}

console.log(countD("The rodents hibernate in their end."));
