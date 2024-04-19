// JavaScript Cookies
//Cookies let you store user information in web pages.
//Cookies are data, stored in small text files, on your computer.

//setCookie()

function setCookie(cname, cValue, eXdays) {
  // console.log("setting cookie");
  const d = new Date();
  // console.log(d,11);
  // let e = d.setTime(d.getTime() + eXdays * 24 * 60 * 60 * 1000);
  d.setTime(d.getTime() + eXdays * 24 * 60 * 60 * 1000);
  //  console.log(d,13);
  // console.log(e,14);
  let expires = "expires=" + d.toUTCString();
  // console.log(expires);
  document.cookie = cname + "=" + cValue + ";expires" + "path=/";
  // console.log(document.cookie);
}

//getNameCookie()
function getCookie(cname) {
  let name = cname + "=";
  // console.log(document.cookie);
  //name=Manik; userName=Jace

  let ca = document.cookie.split(";");
  // console.log(ca);
  //['name=Manik', ' userName=Jace']
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    // console.log(c);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length);
    }
  }
  return "";
}

//setUserNameCookie()
function setUserNameCookie() {
  console.log("setting UserNameCookie");
}

//getUserNameCookie()
function getUserNameCookie() {
  console.log("getting SetUserNameCookie");
}

// checkCookie

function checkCookie(cname, eXdays) {
  let m = getCookie(cname);
  if (m != "") {
    alert("Welcome again " + m);
  } else {
    j = prompt("Please enter your name:", "");
    if (j != "" && j != null) {
      setCookie(cname, j, eXdays);
    }
  }
}

// function setCookie(cname, cValue, eXdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + eXdays * 24 * 60 * 60 * 1000); // sets the expiration time
//   let expires = "expires=" + d.toUTCString(); // creates the expiration part of the cookie string

//   document.cookie = cname + "=" + cValue + ";" + expires + ";path=/"; // corrects the syntax to include both the expiration and path
// }

// function getCookie(cname) {
//   let name = cname + "="; // creates the correct key to search for in the cookie string
//   let ca = document.cookie.split(';');

//   for (let i = 0; i < ca.length; i++) {
//     let c = ca[i].trim(); // use trim to remove whitespace instead of the while loop
//     if (c.indexOf(name) == 0) { // checks if the cookie string starts with the key
//       return c.substring(name.length); // correctly returns the value part of the cookie
//     }
//   }
//   return "";
// }
