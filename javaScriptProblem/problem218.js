//The input is a string containing a valid arithmetic expression. Evaluate it and return the numeric result.

function eq(text){
  const x = eval(text);
  return x;
}
console.log(eq("3+4-9"))
