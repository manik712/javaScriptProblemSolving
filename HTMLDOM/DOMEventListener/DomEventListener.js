function myClick() {
  console.log("hello world");
}

const button = document.getElementById("button");

// button.addEventListener('click',myClick)

button.addEventListener("click", function myClick() {
  console.log("hello world");
});

//You can easily remove an event listener by using the removeEventListener() method.
//element.addEventListener(event, function, useCapture);
//The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.
//Note that you don't use the "on" prefix for the event; use "click" instead of "onclick".


//mouseover
function mouseovers() {
  // console.log("hello world");
  const element = document.getElementById("demo");

  // element.innerHTML =element.innerHTML+ "mouseover<br>"
  element.innerHTML += "mouseOver<br>";
}


//mouseout
function mouseDown() {
  const element = document.getElementById("demo");
  element.innerHTML += "mouseOut<br>";
}
//mouseover
const add = document.getElementById("add");
add.addEventListener("mouseover", mouseovers);

//mouseout
const adds = document.getElementById("add");
add.addEventListener("mouseout", mouseDown);

