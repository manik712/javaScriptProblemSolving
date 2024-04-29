/*

Create a function that takes three 
arguments prob, prize, pay and returns 
true if prob * prize > pay; otherwise 
return false.

*/
function profitableGamble(prob,prize,pay){

  const a = prob * prize; 
  const b = a - pay;
       if(b>0){
        return true;
       }else{
        return false;
       }
}

console.log(profitableGamble(0.9, 3, 2));