// JS Browser BOM

//The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
// The Window Object
/*



Global variables are properties of the window object.

Global functions are methods of the window object.

Even the document object (of the HTML DOM) is a property of the window object:




*/

window.document.getElementById("header");
// is the same as:

document.getElementById("header");



// Window Size
// Two properties can be used to determine the size of the browser window.

// Both properties return the sizes in pixels:

// window.innerHeight - the inner height of the browser window (in pixels)
// window.innerWidth - the inner width of the browser window (in pixels)
// The browser window (the browser viewport) is NOT including toolbars and scrollbars.

// Example
let w = window.innerWidth;
let h = window.innerHeight;



// Other Window Methods
// Some other methods:

window.open() 
// open a new window
window.close()  
// close the current window
window.moveTo() 
// move the current window
window.resizeTo()  
// resize the current window

