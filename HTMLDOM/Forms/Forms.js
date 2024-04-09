function validateForm() {
  const form = document.forms["myForm"];
  // console.log(form["fname"].value);
  const value = form["fname"].value;
  if (value === "") {
    alert("Please enter a valid name");
    return false;
  }
}

//input validation

function myFunction() {
  const y = document.getElementById("numb").value;
  if (isNaN(y) || y < 0 || y > 10 || " ") {text="invalid";
  }else{text="ok";}
  document.getElementById("demo").innerHTML = text;
}
