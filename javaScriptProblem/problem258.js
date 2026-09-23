//Create a function that takes a number as an 
//argument and returns the appropriate error message. 
//You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).


function error(n){
  //Conditional (ternary) operator
  let message = n ===1?"check the fan :e1":
  n===2?"Emergency stop :e2":
  n===3? "pump error:e3" :
  n===4?"c:e4":
  n===5?"temperature sensor error:e5":
   "101" ;
  return message
}
//print the result
console.log(error(110))//110