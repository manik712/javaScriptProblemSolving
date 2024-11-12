/*




Try to make the solution to this problem as efficiently as possible.
Consider using loops that would allow you to type the fewest characters/commands.
While you could simply print the even numbers, get creative and 
see how you could output them in a way that would work up to 10 or even up to 
10,000 with little extra effort.



*/

function evenNumber(n) {
  let arr = [];

  for (let i = 0; i <= 10; i += 2) {
    arr.push(i);
  }
  return arr;

}

console.log(evenNumber(2));