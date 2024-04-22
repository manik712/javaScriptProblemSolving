// // Geolocation API
// // Note
// // Geolocation is most accurate for devices with GPS, like smartphones.\

// const display = document.getElementById("display");
// let watchId;
// // displayLocate

// function displayLocate() {
//   if (navigator.geolocation) {
//     // navigator.geolocation.getCurrentPosition(showPosition, showError);
//     //  watchPosition live

//     if (watchId) {
//       navigator.geolocation.clearWatch(watchId);
//     }
//     watchId = navigator.geolocation.watchPosition(showPosition, showError);
//   } else {
//     display.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }




// //callBack function

// // function showPosition(position) {
// //   display.innerHTML =
// //     "latitude:" +
// //     position.coords.latitude +
// //     "<br>Longitude:" +
// //     position.coords.longitude +
// //     "<br>altitude:" +
// //     position.coords.heading;
// // }

// //

// function showPosition(position) {
//   let latitude = position.coords.latitude;
//   let longitude = position.coords.longitude;

//   let latDegree = Math.floor(latitude);

//   let latMinutes = Math.floor((latitude - latDegree) * 60);
//   let latSeconds = Math.round((latitude - latDegree - latMinutes / 60) * 3600);
//   console.log(latSeconds);

//   let longDegree = Math.floor(longitude);
//   let longMinutes = Math.floor((longitude - longDegree) * 60);
//   let longSeconds = Math.round(
//     (longitude - longDegree - longMinutes / 60) * 3600
//   );

//   display.innerHTML =
//     "Latitude(অক্ষাংশ): " +
//     latDegree +
//     "° " +
//     latMinutes +
//     "' " +
//     latSeconds +
//     "''<br>" +
//     "Longitude(দ্রাঘিমাংশ): " +
//     longDegree +
//     "° " +
//     longMinutes +
//     "' " +
//     longSeconds +
//     "''<br>" +
//     "Think u for using this";
// }

// // showError

// function showError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       display.innerHTML = "User denied the request for Geolocation.";
//       break;
//     case error.POSITION_UNAVAILABLE:
//       display.innerHTML = "Location information is unavailable.";
//       break;
//     case error.TIMEOUT:
//       display.innerHTML = "The request to get user location timed out.";
//       break;
//     case error.UNKNOWN_ERROR:
//       display.innerHTML = "An unknown error occurred.";
//       break;
//   }
// }
















const display = document.getElementById("display");
let watchId;

// displayLocate function
function displayLocate() {
  if (navigator.geolocation) {
    // Clear previous watchPosition if it exists
    if (watchId) {
      navigator.geolocation.clearWatch(watchId);
    }
    watchId = navigator.geolocation.watchPosition(showPosition, showError);
    // Hide the "Press Me To Display Your Location" button
    document.querySelector(".button").style.display = "none";
    // Show the "clean" button
    document.querySelector(".clean-button").style.display = "inline-block";
  } else {
    display.innerHTML = "Geolocation is not supported by this browser.";
  }
}

// Reset display
function resetDisplay() {
  display.innerHTML = " "; // Clear the content of the display element
}

// Clean display
function cleanDisplay() {
  resetDisplay(); // Clear the display
  // Hide the "clean" button
  document.querySelector(".clean-button").style.display = "none";
  // Show the "Press Me To Display Your Location" button
  document.querySelector(".button").style.display = "inline-block";
}

// showPosition function
function showPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  let latDegree = Math.floor(latitude);
  let latMinutes = Math.floor((latitude - latDegree) * 60);
  let latSeconds = Math.round((latitude - latDegree - latMinutes / 60) * 3600);

  let longDegree = Math.floor(longitude);
  let longMinutes = Math.floor((longitude - longDegree) * 60);
  let longSeconds = Math.round((longitude - longDegree - longMinutes / 60) * 3600);

  display.innerHTML =
    "Latitude(অক্ষাংশ): " +
    latDegree +
    "° " +
    latMinutes +
    "' " +
    latSeconds +
    "''<br>" +
    "Longitude(দ্রাঘিমাংশ): " +
    longDegree +
    "° " +
    longMinutes +
    "' " +
    longSeconds +
    "''<br>" +
    "Thank you for using this";
}

// showError function

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
