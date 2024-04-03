//Function Invocation
//The code inside a JavaScript function will execute when "something" invokes it.

//Invoking a JavaScript Function
//In this tutorial, we will use invoke, because a JavaScript function can be invoked without being called.

// Invoking a Function as a Function

// function a() {
//   console.log("window object");
// }
// console.log(window.a());

//will return window object

//What is this?

function b() {
  console.log(this);
}

b();
//return
/*
<ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 37.98820000002161,
      nodeStart: 3.0081000002101064,
      v8Start: 6.690500000026077,
      bootstrapComplete: 28.371500000357628,
      environment: 15.177300000097603,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1712149714179.662
  },
  fetch: [AsyncFunction: fetch]
}



*/

const x = {
  c: function () {
    console.log(this);
  },
};

x.c();

//Invoking a function as a global function, causes the value of this to be the global object.
// Using the window object as a variable can easily crash your program.

//Invoking a Function as a Method

// Example/
const myObject = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
myObject.fullName(); // Will return "John Doe"

//Invoking a Function with a Function Constructor
