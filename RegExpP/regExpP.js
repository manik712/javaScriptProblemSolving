//problem:regexp
/*
Write a JavaScript function that takes an email 
address as input and returns true if it is a valid email address,
and false otherwise. Use a regular expression to perform 
the validation. Consider the following rules for a valid email address:

*/
function isValidEmail(email) {
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const t = emailRegExp.test(email);
  return t;
}
// Examples
console.log(isValidEmail("user123@example.com")); // true
console.log(isValidEmail("john.doe@company.co.uk")); // true
console.log(isValidEmail("invalid.email@.com")); // false
console.log(isValidEmail("user@domain")); // false
console.log(isValidEmail(".username@domain.com")); // false
