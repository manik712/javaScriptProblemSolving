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


