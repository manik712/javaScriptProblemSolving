// Geolocation API
// Note
// Geolocation is most accurate for devices with GPS, like smartphones.\

const display = document.getElementById("display");

// displayLocate

function displayLocate() {
  if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition(showPosition, showError);
    //  watchPosition live
    navigator.geolocation.watchPosition(showPosition, showError);
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
    position.coords.longitude +
    "<br>altitude:" +
    position.coords.heading;
}

// showError

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      display.innerHTML = "User denied the request for Geolocation.";
      break;
    case error.POSITION_UNAVAILABLE:
      display.innerHTML = "Location information is unavailable.";
      break;
    case error.TIMEOUT:
      display.innerHTML = "The request to get user location timed out.";
      break;
    case error.UNKNOWN_ERROR:
      display.innerHTML = "An unknown error occurred.";
      break;
  }
}
