/*


In the Code tab you will find code that is missing a 
single character in order to pass the tests. However,
your goal is to submit a function as minimalist as possible. 
Use the tips in the tips section below.

Write a function that returns the strings:

"both" if both given booleans a and b are true.
"first" if only a is true.
"second" if only b is true .
"neither" if both a and b are false.

*/

function  areTrue(a , b){
   if(a ===true && b ===true){
    return "both";
   }else if(a ===true && b ===false){
    return "first";
   }else if( a===false && b ===true){
    return "second";
   }else if( a ===false && b ===false){
    return "neither";
   }
}
console.log(areTrue(true,true));