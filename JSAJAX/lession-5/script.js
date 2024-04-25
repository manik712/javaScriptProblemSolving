// "https://jsonplaceholder.typicode.com/todos/1"

//sendRequest

function sendRequest(method, url, data) {
  const promise = new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {
      // console.log(JSON.parse(this.responseText).userId);
      //1

      if(this.status>=400){
        reject(`application error and the error is ${this.status}`);
      }
      resolve(this.response);
    };

    xhr.onerror = function () {
      reject("you have an error");
    };

    xhr.open(method, url);

    xhr.send(data);
    xhr.responseType = "json";
  });

  return promise;
}

//getData....

function getData() {
  sendRequest("GET", "https://jsonplaceholder.typicode.com/todos/1")
    .then((responseData) => {
      console.log(responseData);
    })
    .catch((err) => {
      console.log(err);
    });
}

// sendData....
function sentData() {
  sendRequest(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    })
  ).then((responseData) => {
    console.log(responseData);
  });
}

//getElement
const getButton = document.getElementById("get");
const sentButton = document.getElementById("sent");

//event handlers
getButton.addEventListener("click", getData);
sentButton.addEventListener("click", sentData);
