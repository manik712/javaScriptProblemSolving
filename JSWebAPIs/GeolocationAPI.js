// Geolocation API
// Note
// Geolocation is most accurate for devices with GPS, like smartphones.\

const display = document.getElementById("display");

function displayLocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    display.innerHTML = "Geolocation is not supported by this browser.";
  }
}

//callBack function

function showPosition(position) {
  display.innerHTML =
    "latitude:" +
    position.coords.latitude +
    "<br>Longitude:" +
    position.coords.longitude;
}
