/*


Some basic arithmetic operators are +, -, *, /, and %. 
In this challenge you will be given three parameters,
 num1, num2, and an operator. Use the operator on number 1 and 2.


*/
function operator(num1, num2, operate) {
  let result;
  switch (operate) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      console.log("Invalid operator");
      return;
  }
  return result;
}
console.log(operator(4 ,7, "6"));