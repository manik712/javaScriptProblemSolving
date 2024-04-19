// JS Web APIs

function myFunction(){
  // console.log("clicking myFunction");
  const validationObject =document.getElementById("id1")
  if(!validationObject.checkValidity()){
     document.getElementById("demo").innerHTML =validationObject.validationMessage
  }
  
}