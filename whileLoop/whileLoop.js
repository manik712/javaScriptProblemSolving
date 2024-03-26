//while loop

let text = "";
let i = 0;
while (i > 20) {
  text = text + "\nThe number is" + i;
  i++;
}

//console.log(text);

//problem


//Write a JavaScript program that prompts the user to enter
// a number and then uses a while loop to print 
//the multiplication table for that number, from 1 to 10.

// Get user input
const number = parseInt(-45);

// Check if the input is a number
if (!isNaN(number)) {
    // Initialize a variable for the multiplier
    let multiplier = 1;

    // Use a while loop to print the multiplication table
    while (multiplier <= 10) {
        const result = number * multiplier;
        console.log(`${number} * ${multiplier} = ${result}`);
        multiplier++;
    }
} else {
    console.log("Please enter a valid number.");
}
