//HTMLCollection 
//The getElementsByTagName() method returns an HTMLCollection object.
//An HTMLCollection object is an array-like list (collection) of HTML elements.
const myCollection = document.getElementsByTagName("p");
myCollection[1]
// Note: The index starts at 0.

//HTML HTMLCollection Length


/*

An HTMLCollection is NOT an array!

An HTMLCollection may look like an array, but it is not.

You can loop through the list and refer to the elements with a number (just like an array).

However, you cannot use array methods like valueOf(), pop(), push(), or join() on an HTMLCollection.



*/
