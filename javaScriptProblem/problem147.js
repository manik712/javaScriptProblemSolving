/*



*/
function edabitAmazing(str){
  let a = str.includes("edabit");
  if(a===true){
    return str
  }else{
    return str.replace(/amazing/g,"not amazing")
  }
}
console.log(edabitAmazing("manik is amazing"))