// Collect user's age using prompt()
let age = prompt("Enter your age:");

// Convert input to a number
age = Number(age);

// Categorize age and log the result
if (age < 5) {
    console.log("You are a Toddler.");
} else if (age >= 5 && age <= 12) {
    console.log("You are a Child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a Teenager.");
} else if (age >= 20 && age <= 35) {
    console.log("You are a Young Adult.");
} else if (age >= 36 && age <= 60) {
    console.log("You are Middle Aged.");
} else {
    console.log("You are a Senior.");
