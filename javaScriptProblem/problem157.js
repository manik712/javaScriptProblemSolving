/*

Given a pH value, return whether that value is "alkaline" (greater than 7),
"acidic" (less than 7), or "neutral" (7). 
Return "invalid" if the value given is less than 0 or greater than 14.


Examples

pHName(5) ➞ "acidic"

pHName(8.7) ➞ "alkaline"

pHName(7) ➞ "neutral"

*/

function pHName(ph) {
  if (ph < 0) {
    return "invalid";
  }
  if (ph === 0 || ph <= 6) {
    return "acidic";
  } else if (ph === 7) {
    return "neutral";
  } else if (ph === 8 || ph <= 14) {
    return "alkaline";
  } else if (ph > 14) {
    return "invalid";
  }
}
console.log(pHName(18));
