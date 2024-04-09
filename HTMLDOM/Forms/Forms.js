function validateForm() {
  const form = document.forms["myForm"];
  // console.log(form["fname"].value);
  const value = form["fname"].value;
  if (value === "") {
    alert("Please enter a valid name");
    return false;
  }
}
