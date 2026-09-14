//Create a function called checkNumbers(n). The function should check each number from 1 to n.

// Conditions:
// If the number is even → print Even
// If the number is odd → print Odd
// Each result must be displayed using a template string.



function evenOrOddNumber(n){
for(let i = 1; i<=n; i++){
  if(i%2===0){
  console.log(`${i} is even`) 
  }
  else{
    console.log(`${i} is odd`)
  }
}
}
evenOrOddNumber(5)

// 1 is odd
// 2 is even
// 3 is odd
// 4 is even
// 5 is odd