// JS Browser BOM
var myWindow;
// //The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
// // The Window Object
// /*

// Global variables are properties of the window object.

// Global functions are methods of the window object.

// Even the document object (of the HTML DOM) is a property of the window object:

// */

// window.document.getElementById("header");
// // is the same as:

// document.getElementById("header");

// // Window Size
// // Two properties can be used to determine the size of the browser window.

// // Both properties return the sizes in pixels:

// // window.innerHeight - the inner height of the browser window (in pixels)
// // window.innerWidth - the inner width of the browser window (in pixels)
// // The browser window (the browser viewport) is NOT including toolbars and scrollbars.

// // Example
// let w = window.innerWidth;
// let h = window.innerHeight;

// // Other Window Methods
// // Some other methods:

// window.open()
// // open a new window
// window.close()
// // close the current window
// window.moveTo()
// // move the current window
// window.resizeTo()
// // resize the current window

const width = document.getElementById("width");
const height = document.getElementById("hight");

width.innerHTML = "the width is:" + window.innerWidth;
height.innerHTML = "the height is:" + window.innerHeight;

const Swidth = document.getElementById("Swidth");
const Sheight = document.getElementById("Sheight");
const SavailWidth = document.getElementById("SavailWidth");
const SavailHeight = document.getElementById("SavailHeight");
const ScolorDepth = document.getElementById("ScolorDepth");
const SpixelDepth = document.getElementById("SpixelDepth");



Swidth.innerHTML = "the Screen width is:" + screen.width;
Sheight.innerHTML = "the Screen height is:" + screen.height;
SavailWidth.innerHTML = "the Screen availWidth is:" + screen.availWidth;
SavailHeight.innerHTML = "the Screen availHeight is:" + screen.availHeight;
ScolorDepth.innerHTML = "the Screen colorDepth is:" + screen.colorDepth;
SpixelDepth.innerHTML = "the Screen pixelDepth is:" + screen.pixelDepth;






function openWindow() {
  myWindow = window.open("https://www.google.com");
}

function closeWindow() {
  if (myWindow && !myWindow.closed) {
    // Checks if myWindow exists and if it's still open
    myWindow.close();
  } else {
    console.log("Window already closed or was never opened.");
  }
}
