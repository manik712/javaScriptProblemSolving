// Window Navigator

const cookieEnabled = document.getElementById("cookieEnabled");
const appCodeNames = document.getElementById("appCodeNames");
const platform = document.getElementById("platform");
const product = document.getElementById("product");
const appVersion = document.getElementById("appVersion");
const appName = document.getElementById("appName");
const language = document.getElementById("language");

cookieEnabled.innerHTML = "cookieEnabled is:" + navigator.cookieEnabled;
appCodeNames.innerHTML = "appCodeName is:" + navigator.appCodeName;
platform.innerHTML = "platform is:" + navigator.platform;
product.innerHTML = "appVersion is:" + navigator.product;
appVersion.innerHTML = "appVersion is:" + navigator.appVersion;
appName.innerHTML = "appName is:" + navigator.appName;
language.innerHTML = "appName is:" + navigator.language
