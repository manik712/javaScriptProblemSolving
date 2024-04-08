//JavaScript Callbacks

function Display(some) {
  console.log(some);
}

function calculator(num1, num2) {
  return num1 + num2;
}

let result = calculator(1, 100);

Display(result);

//or

function Display(some) {
  console.log(some);
}

function calculator(num1, num2) {
  let sum = num1 + num2;
  Display(sum);
}
calculator(1, 100);

// Display(result);

//JavaScript Callbacks
//A callback is a function passed as an argument to another function.

//callBack function







function Display(something) {
  console.log("result:", something);
}

function calculator(num1, num2, callback) {
  let sum = num1 + num2;
   if(callback) callback(sum);
}
calculator(1, 100, Display);


