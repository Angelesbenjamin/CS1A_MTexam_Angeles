// Ask the user for their favorite number
let favoriteNumber = Number(prompt("Enter your favorite number:"));

// Variable to store user's guess
let guess = null;

// Loop until the user guesses correctly
while (guess !== favoriteNumber) {
    guess = Number(prompt("Guess your favorite number:"));

    if (guess > favoriteNumber) {
        console.log("Too high! Try again.");
    } else if (guess < favoriteNumber) {
        console.log("Too low! Try again.");
    } else {
        console.log("Correct! Your favorite number is " + favoriteNumber + ".");
    }
}
