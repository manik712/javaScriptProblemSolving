//Problem: Student Result Checker

// Create a function called checkResult(marks). The function should work with numbers from 1 to marks.

// Conditions:
// If the number is 40 or greater → "Pass"
// If the number is less than 40 → "Fail"
// Each result must be displayed using a template string.


function checkNumber(n) {
  if(n>=40){
    console.log(`${n}:Pass`)
  }else{
    console.log(`${n}:Fail`)
  }
}
checkNumber(40)//pass