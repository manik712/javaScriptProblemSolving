/*

Write a JavaScript program to calculate the factorial of a given number. 


*/
function factorial(number) {
  let ans = 1;
  if (number == 0 || number == 1) {
    return ans;
  } else if (number > 0) {
    for (let i = number; i >= 1; i--) {
      ans = ans * i;
    }
  }else{
    return "Number will be positive"
  }
  return ans;
}
console.log(factorial(10));