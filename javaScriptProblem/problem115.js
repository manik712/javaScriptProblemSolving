/*

Create a function that returns the total number of parameters passed in.


*/


function numberOfArg(){
  const params = arguments.length;
  return params;
}

console.log(numberOfArg("a","b","c","d","e","f"));
