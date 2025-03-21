// Initialize an empty array to store colors
let favoriteColors = [];

// Loop to collect three favorite colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt(Enter your favorite color (${i + 1}/3):);
    favoriteColors.push(color); // Add color to the array
    console.log("Updated color list:", favoriteColors); // Log updated list
}

// Ask for an additional color and add it to the array
let newColor = prompt("Enter one more color to add:");
favoriteColors.push(newColor);
console.log("Final color list after adding another color:", favoriteColors);
