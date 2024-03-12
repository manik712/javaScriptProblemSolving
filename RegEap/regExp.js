//search()

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
let n1 = text.search("W3SchoolsM");
console.log(n1);
console.log(n);

//regexp

let text1 = "Visit W3Schools";
let n2 = text1.search(/w3schools/i);
console.log(n2, 13);
