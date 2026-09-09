//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2){
  const number = num1+num2;
  if(number<100){
    return true
  }
  else{
    return false
  }
}
console.log(lessThan100(12,20))