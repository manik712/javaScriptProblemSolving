function getData() {
  const xhr =  new XMLHttpRequest();

  xhr.onload = function () {
    console.log(this.responseText);
  };
  xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
  xhr.send();                               
}

function sentData() {
  console.log("sentData");
}

const getButton = document.getElementById("get");
const sentButton = document.getElementById("sent");

getButton.addEventListener("click", getData);
sentButton.addEventListener("click", sentData);
