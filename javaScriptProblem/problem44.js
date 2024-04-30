/*
Create a function that returns true if an integer 
is evenly divisible by 5, and false otherwise.

*/

function isInteger(num){
   const res = num % 5;
   if(res != 0){
    return false;
   }else{
    return true;
   }
}

console.log(isInteger(-11));

