/*
You can assign variables from arrays like this:

arr = [1, 2, 8]
first, , last = arr

first = lst[0]

last = lst[arr.length - 1]


console.log(first) ➞ outputs 1
console.log(last) ➞ outputs 8
Using Destructuring Assignment (check the Resources tab),
your task is to
unpack the arrays writeyourcodehere into three variables, first, 
a variable to ignore all middle values and last.


*/


let arr = [1,2,3,4,5];


let first = arr[arr.length - 1];
console.log(first);