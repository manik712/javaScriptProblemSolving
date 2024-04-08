//Asynchronous

//synchronous
console.log("line 1 ");
console.log("line 2 ");
console.log("line 3 ");
// line 1
// line 2
// line 3

//or

//synchronous
function test() {
  console.log("line 2 ");
}

console.log("line 1 ");
test();
console.log("line 3 ");
// line 1
// line 2
// line 3

//Asynchronous
console.log("line 1 ");
setTimeout(function () {
  console.log("line 2 ");
}, 200);
console.log("line 3 ");
// line 1
// line 3
// line 2

//setInterval()
console.log("line 1 ");

setInterval(function () {
  console.log("line 2 ");
}, 5000);

console.log("line 3 ");

//In the real world, callbacks are most often used with asynchronous functions.
// A typical example is JavaScript setTimeout().


// again, callbacks are

setTimeout(later, 4000);

function later() {
  console.log("call after 4s");
}

