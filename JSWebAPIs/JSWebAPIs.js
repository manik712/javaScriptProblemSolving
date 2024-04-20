// JS Web APIs

function myFunction() {
  // console.log("clicking myFunction");
  const validationObject = document.getElementById("id1");
  if (validationObject.validity.rangeOverflow) {
    validationObject.setCustomValidity("you have made rangeOverflow");
  }else if (validationObject.validity.rangeUnderflow){
    validationObject.setCustomValidity("you have made rangeUnderflow")
  }else if(validationObject.validity.typeMismatch){
    validationObject.setCustomValidity("you have made type error")
  }else if(validationObject.validity.tooLong){
    validationObject.setCustomValidity("you have made too long")
  }

  if (!validationObject.checkValidity()) {
    document.getElementById("demo").innerHTML =
      validationObject.validationMessage;
  }
}
