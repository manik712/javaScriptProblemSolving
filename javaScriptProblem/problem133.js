/*
You will need to write three unfinished logic gates.
 Continue to write the three logic gates: AND, OR, and NOT.

Examples
AND(1, 1) ➞ 1
AND(0, 0) ➞ 0

OR(1, 0) ➞ 1
OR(1, 1) ➞ 1

NOT(0) ➞ 1
NOT(1) ➞ 0



*/

function and(a ,b){
  return  a && b === 1  ?  1 : 0;

}


console.log(and(1,0));