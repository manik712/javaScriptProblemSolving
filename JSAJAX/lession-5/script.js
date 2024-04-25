// "https://jsonplaceholder.typicode.com/todos/1"

//sendRequest

function sendRequest(method, url) {
  const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // console.log(JSON.parse(this.responseText).userId);
      //1
      resolve(this.response);
    };
    xhr.open(method, url);

    xhr.send();
    xhr.responseType = "json";
  });

  return promise;
}

//getData....

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1").then(
    (responseData) => {
      console.log(responseData);
    }
  );
}

// sendData....
function sentData() {
  sendRequest("POST", "https://jsonplaceholder.typicode.com/posts").then(
    (responseData) => {
      console.log(responseData);
    }
  );
}

//getElement
const getButton = document.getElementById("get");
const sentButton = document.getElementById("sent");

//event handlers
getButton.addEventListener("click", getData);
sentButton.addEventListener("click", sentData);
