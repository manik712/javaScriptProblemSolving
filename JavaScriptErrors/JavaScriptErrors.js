//Throw, and Try...Catch...Finally

/*
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.

*/
//try catch

try {
  //code
} catch (err) {
  console.log(err);
}

//example
try {
  addleat("try catch");
} catch (err) {
  // console.log(err.message);
}

//throw exception
let x = "5";
try {
  if (x == "") throw "empty";
  if (isNaN(x)) throw "not a number";
  x = Number(x);
  if (x < 5) throw "too low";
  if (x > 10) throw "too high";
} catch (err) {
  console.log(err);
  return;
}
console.log("code is ok");
