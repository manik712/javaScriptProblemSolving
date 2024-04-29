/*
Create a function that takes an integer
and returns true if it's divisible by 100,
otherwise return false.
*/

function divisible(num){
  const res = num / 100;
  if(Number.isInteger(res)){
    return true;
  }else{return false;}

}
console.log(divisible(1002));