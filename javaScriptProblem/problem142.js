/*


Create a function that returns the string 
"Burp" with the amount of "r's" determined 
by the input parameters of the function.



Examples


longBurp(3) ➞ "Burrrp"

longBurp(5) ➞ "Burrrrrp"

longBurp(9) ➞ "Burrrrrrrrrp"


*/
function longBurp(count){
      let result = "Bu"+"r".repeat(count)+"p" ;    
      return result
}
console.log(longBurp(9));