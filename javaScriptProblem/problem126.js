/*


There is something you have to do with the variable name rest in order
 to assign it an object containing the rest of the object
properties. You can find out how in the MDN docs in the Resources tab.

Use the rest syntax to change the code so that rest = {city: "Phoenix",
 state: "AZ", address: "USA"}. Only edit the left side of the assignment
{ name, email, rest }. Ignore the .toString() function (used for validation).


*/

let { name, email, ...rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }

console.log(name);  // "John"
console.log(email);  // "john@example.com"
console.log(rest);   // { city: "Phoenix", state: "AZ", country: "USA" }
