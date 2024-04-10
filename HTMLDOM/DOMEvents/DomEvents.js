function clickHer() {
  const event = document.getElementById("h2");
  event.innerHTML = "neela";
}

//or

function clickHim(parameter) {
  parameter.innerHTML = "jace";
}

//HTML Event Attributes

function displayDate() {
  const a = document.getElementById("h4");
  a.innerHTML = Date();
}
