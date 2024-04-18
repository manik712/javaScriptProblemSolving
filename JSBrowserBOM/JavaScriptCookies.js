// JavaScript Cookies
//Cookies let you store user information in web pages.
//Cookies are data, stored in small text files, on your computer.

//setCookie()

function setCookie(cname, cValue, eXdays) {
  // console.log("setting cookie");
  const d = new Date();
  // console.log(d,11);
  let e = d.setTime(d.getTime() + eXdays * 24 * 60 * 60 * 1000);
  //  console.log(d,13);
  // console.log(e,14);
  let expires = "expires=" + d.toUTCString();
  // console.log(expires);
  document.cookie = cname + "=" + cValue + ";expires" + "path=/";
  // console.log(document.cookie);
}

//getNameCookie()
function getCookie(cname) {
  console.log(document.cookie);
  //name=Manik; userName=Jace

  let ca =document.cookie.split(';');
  console.log(ca);
  //['name=Manik', ' userName=Jace']
  for(i=1; i<ca.length;i++){
  let c = ca[i]
  console.log(c);
  }
  
  
}

//setUserNameCookie()
function setUserNameCookie() {
  
  console.log("setting UserNameCookie");
}

//getUserNameCookie()
function getUserNameCookie() {
  console.log("getting SetUserNameCookie");
}
