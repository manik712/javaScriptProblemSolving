//Window Location
//The window.location object can be used to get the current page address (URL) and to redirect the browser to a new page.

const href = document.getElementById("href");
const hostname = document.getElementById("hostname");

const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");

href.innerHTML     = " href is: " + location.href;
hostname.innerHTML = " hostname is: " + location.hostname;
pathname.innerHTML = " pathname is: " + location.pathname;
protocol.innerHTML = " protocol is: " + location.protocol;

port.innerHTML = "prot is: " + location.port;

//window.location.assign()

function ok() {
  window.location.assign("https://www.w3schools.com");
}
