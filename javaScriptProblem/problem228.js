// Write a template string according to the following example:

// Example
// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were: John, Joe and Jack.

function formate(a, b, c) {
  const template = `hello, we are three friends.we are ${a},${b} and ${c}`;
  return template;
}

console.log(formate("manik","Shaded","sames"))