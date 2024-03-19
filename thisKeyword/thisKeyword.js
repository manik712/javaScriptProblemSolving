//The JavaScript this Keyword

const person = {
  firstName: "Gold",
  lastName: "Iron",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName + this.id;
  },
};

//What is this?

//In JavaScript, the this keyword refers to an object.
//Which object depends on how this is being invoked (used or called).
//The this keyword refers to different objects depending on how it is used:
//
// In an object method, this refers to the object.
//Alone, this refers to the global object.
//In a function, this refers to the global object.

//In a function, in strict mode, this is undefined.

//In an event, this refers to the element that received the event.
//Methods like call(), apply(), and bind() can refer this to any object.

/*


Note:
this is not a variable. It is a keyword. You cannot change the value of this.


*/

/*
this in a Method
When used in an object method, this refers to the object.

In the example on top of this page, this refers to the person object.

Because the fullName method is a method of the person object.




*/

/*
this Alone
When used alone, this refers to the global object.

Because this is running in the global scope.

In a browser window the global object is [object Window]



*/

let x = this;

console.log(x);
// out put  maybe window

function d() {
  console.log(this);
}
d();
// out put maybe window






/*
this in Event Handlers
In HTML event handlers, this refers to the HTML element that received the event:


*/



// Example

<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

//this = button