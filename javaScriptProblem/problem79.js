/*

Éowyn has written the function isOdd() to check if a given
number is odd or not. Unfortunately, the
function does not return the correct result 
for all the inputs. Help her fix the error.


*/


function isOdd(num) {
	if(num % 2 !== 0){
    return true;
  }else{
    return false;
  }
}

console.log(isOdd(0));