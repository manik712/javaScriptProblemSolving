/*
Create a function which makes the last
character of a string repeat n number of times.



Examples

modifyLast("Hello", 3) ➞ "Hellooo"

modifyLast("hey", 6) ➞ "heyyyyyy"

modifyLast("excuse me what?", 5) ➞ "excuse me what?????"

*/

function modifyLast(x ,num){
    let y = x.concat(x.charAt(x.length-1).repeat(num-1));
    return y;
}
console.log(modifyLast("Hello?",3));