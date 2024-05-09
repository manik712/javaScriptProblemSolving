/*


The Math.abs() function returns the absolute value of a number. 
This means that it returns a number's positive value. You can
 think of it as the distance away from zero.

Create a function that recreates this functionality.



*/

function abs(num){
  if(num < 0){
    return -num;
  }else{
    return num;
  }
}

console.log(abs(0));