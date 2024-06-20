/*



*/
function MtoD(string){
  let myString = string.toUpperCase()
  let regex = /M/g;
  let result = myString.replace(regex,"W")
  
  return result;
}

console.log(MtoD("Manik sarker meet"))