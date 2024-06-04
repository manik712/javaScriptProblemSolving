/*


Write a function that returns true if k^k == n for
 input (n, k) and return false otherwise.

Examples
kToK(4, 2) ➞ true

kToK(387420489, 9) ➞ true
// 9^9 == 387420489

kToK(3124, 5) ➞ false

kToK(17, 3) ➞ false



*/

function ktOk(n, k) {
  let k1 = k*k;
  if(k1===n){
    return true;
  }else{
    return false;
  }
}
console.log(ktOk(3,2));