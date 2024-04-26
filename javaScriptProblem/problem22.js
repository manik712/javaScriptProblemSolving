/*
Write a function that
 returns the string "something" 
 joined with a space " " and the 
 given argument a.

*/



function giveMeSomething(a) {
  let text = "somthing";
  let result = text.concat(" ", a);
  return result;
}


console.log(giveMeSomething("is something"));




// function giveMeSomething(a) {
//   return `something ${a}`;
//  }
