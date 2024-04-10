const button = document.getElementById("button");

// button.addEventListener('click',myClick)

// button.addEventListener("click", function myClick() {
//   console.log("hello world");
// });

//passing parameter

function myClick(text) {
  console.log(text);
}

//addEventListener
button.addEventListener("click", function () {
  myClick("hello world");
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

//clicked

// function clicked(){
//   const element =document.getElementById("demo");
//   element.innerHTML+="clicked<br>"
// }

function clicked() {
  const element = document.getElementById("demo");
  element.innerHTML += "clicked<br>";
}

//mouseover
const add = document.getElementById("add");
add.addEventListener("mouseover", mouseovers);

//mouseout
const adds = document.getElementById("add");
add.addEventListener("mouseout", mouseDown);

//clicked

const click = document.getElementById("add");
click.addEventListener("click", clicked);

// passing parameter

// const click=document.getElementById("add");
// click.addEventListener('click',function(){
// clicked();
// })

//Add an Event Handler to the window Object






//Event Bubbling or Event Capturing?

//event Bubbling by default
// event Capturing is not  by default
//element.addEventListener(event, function, true); =capturing
// false by default





function buttonClick() {
  console.log("buttonClick");
}

function containerClick() {
  console.log("containerClick");
}


const but = document.getElementById("but");
but.addEventListener("click", buttonClick, true);


const container = document.getElementById("container");
container.addEventListener("click", containerClick, true);


//The removeEventListener() method

