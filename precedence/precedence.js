/*
Operator precedence describes the order in 
which operations are performed in an arithmetic 
expression.


Multiplication (*) and division (/) have higher 
precedence than addition (+) and subtraction (-).


*/

let x = 100 + 50 * 3;
console.log(x);
//250

/*
When using parentheses,
operations inside the parentheses
are computed first:

*/
let x1 = (100 + 50) * 3;
console.log(x1);
//450

/*
Operations with the same 
precedence (like * and /) are
computed from left to right:

*/
let x2 = (100 / 50) * 3;
console.log(x2);
//6
