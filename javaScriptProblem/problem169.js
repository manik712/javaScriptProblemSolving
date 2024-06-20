/*


*/
function trueOrFalse(num,person){
  
  if(num>=person.num1 && num<=person.num2){
    return true;
  }
  else{
    return false;
  }
  }
  
  console.log(trueOrFalse(4,{num1:3,num2:5}))