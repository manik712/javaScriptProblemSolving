// Fetch API
const display = document.getElementById("displays");

// function fetchData() {
//   fetch("http://127.0.0.1:5501/JSWebAPIs/fetchData.text")
//     .then((res) => res.text())
//     .then((data) => {
//       display.innerHTML = data;
//     });
// }

async function fetchData() {
  const res = await fetch("http://127.0.0.1:5501/JSWebAPIs/fetchData.text");
  const data = await res.text();
  display.innerHTML = data;
}
