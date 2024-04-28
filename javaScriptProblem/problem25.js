/*
Given two numbers, return true
if the sum of both numbers is
less than 100. Otherwise return false.


*/

function lessThanH(num1,num2){
  const result =num1+num2
  if(result<100){
    return true
  }else{
     return false
  }
  return result
}
console.log(lessThanH(200,30))