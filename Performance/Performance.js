//JavaScript Performance

//Reduce Activity in Loops

Bad: for (let i = 0; i < arr.length; i++) {}

// Better Code:
let l = arr.length;
for (let i = 0; i < l; i++) {}

/*
The bad code accesses the length property of an array each time the loop is iterated.

The better code accesses the length property outside the loop and makes the loop run faster.

*/


// The HTTP specification defines that browsers should not download more than two components in parallel.





/*
Avoid Using with
Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

The with keyword is not allowed in strict mode.

*/
