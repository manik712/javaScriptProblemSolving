/*
The HTML DOM NodeList Object
A NodeList object is a list (collection) of nodes extracted from a document.

A NodeList object is almost the same as an HTMLCollection object.

Some (older) browsers return a NodeList object instead of an HTMLCollection for methods like getElementsByClassName().

All browsers return a NodeList object for the property childNodes. 

Most browsers return a NodeList object for the method querySelectorAll().

The following code selects all <p> nodes in a document:




HTML DOM Node List Length
The length property defines the number of nodes in a node list:


myNodelist.length
*/
//The Difference Between an HTMLCollection and a NodeList
/*

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

*/



// Not an Array!
// A NodeList may look like an array, but it is not.

// You can loop through a NodeList and refer to its nodes by index.

// But, you cannot use Array methods like push(), pop(), or join() on a NodeList.

