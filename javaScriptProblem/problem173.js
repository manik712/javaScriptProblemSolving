/*



*/
function odd(n){
  let sum= 0
   for(i=0;i<=n;i++){
     if(i%2 !=0){
       sum +=i;
     }
   }
   return sum
 }
 console.log(odd(15))