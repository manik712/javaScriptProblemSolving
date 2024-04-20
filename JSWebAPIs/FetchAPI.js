// Fetch API
const display = document.getElementById("displays");

function fetchData() {
  fetch("http://127.0.0.1:5501/JSWebAPIs/fetchData.text")
    .then((res) => res.text())
    .then((data) => {
      display.innerHTML = data;
    });
}
