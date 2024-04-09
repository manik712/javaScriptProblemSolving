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


/*



Constraint      Validation HTML Input Attributes

Attribute     	Description
disabled	      Specifies that the input element should be disabled
max     	       Specifies the maximum value of an input element
min     	     Specifies the minimum value of an input element
pattern	       Specifies the value pattern of an input element
required	     Specifies that the input field requires an element
type 	        Specifies the type of an input element




*/