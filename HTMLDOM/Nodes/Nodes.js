const para = document.createElement("p");
const node = document.createTextNode("hello world");
para.appendChild(node);
console.log(para.appendChild(node));
//hello world
const element = document.getElementById("div1");
element.appendChild(para);
console.log(element.appendChild(para));
//<p>hello world</p>

//Creating new HTML Elements - insertBefore()
const p1 = document.getElementById("p1");
element.insertBefore(para, p1);

//Removing Existing HTML Elements
const p2 = document.getElementById("p2");
p2.remove();
