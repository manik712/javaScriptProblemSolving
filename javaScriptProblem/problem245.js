//Create a function that takes an object of student names and returns an array of the student-name values in alphabetical order.

// Examples
// getStudentNames({
//   "Student 1": "Steve",
//   "Student 2": "Becky",
//   "Student 3": "John"
// }) ➞ ["Becky", "John", "Steve"]

function getStudentNames(obj) {
  let a = obj.Student1;
  let b = obj.Student2;
  let c = obj.Student3;
  return [a, b, c];
}

let x = {
  Student1: "Steve",
  Student2: "Becky",
  Student3: "John",
};

console.log(getStudentNames(x));//[ 'Steve', 'Becky', 'John' ]
