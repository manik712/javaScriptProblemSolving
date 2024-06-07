/*


Create a function that checks if the argument
is an integer or a string. Return "int" if it's
an integer and "str" if it's a string.

Examples


intOrString(8) ➞ "int"

intOrString("Hello") ➞ "str"

intOrString(9843532) ➞ "int"


*/

function intOrString(x){
   return (typeof x === "string")  ? "str" : "int";
}

console.log(intOrString(3));