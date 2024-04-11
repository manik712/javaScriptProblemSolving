const para = document.createElement("p");
const node = document.createTextNode("hello world");
para.appendChild(node);
console.log(para.appendChild(node));
//hello world
const element = document.getElementById('div1');
element.appendChild(para);
console.log(element.appendChild(para));
//<p>hello world</p>