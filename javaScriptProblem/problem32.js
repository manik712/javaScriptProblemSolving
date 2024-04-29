/*

In this challenge, you must verify 
the equality of two different values
 given the parameters a and b.

*/


function  checkEquality(a,b){
  if(typeof(a) != typeof(b)){
    return false;
  }else{
    return true;
  }

}

console.log(checkEquality(400,500));