/*
Given two strings, firstName and lastName, return 
a single string in the format "last, first".

*/




// function myConcat(firstName, lastName) {
//   const first = firstName;
//   const last = lastName;
//   const fullName = first.concat(", ", last);
//   return fullName;
// }

// console.log(myConcat("manik","sarker"));






function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

// Test cases
console.log(concatName("First", "Last")); // ➞ "Last, First"
console.log(concatName("John", "Doe")); // ➞ "Doe, John"
console.log(concatName("Mary", "Jane")); // ➞ "Jane, Mary"
