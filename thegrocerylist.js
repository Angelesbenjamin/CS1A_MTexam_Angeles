/ Ask the user if they want to create a grocery list
let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();

if (createList === "y") {
    // Ask the user for the number of grocery items
    let itemCount = Number(prompt("Enter the number of items for your grocery list:"));

    // Initialize an empty array for the grocery list
    let groceryList = [];

    // Collect grocery items from the user
    for (let i = 0; i < itemCount; i++) {
        let item = prompt(Enter item ${i + 1}:);
        groceryList.push(item);
    }

    // Sort and reverse the grocery list
    let groceryListSort = [...groceryList].sort(); // Safe sorting (does not modify original)
    let groceryListReverse = [...groceryList].reverse(); // Safe reversing

    // Display all lists using alert()
    alert("Original Grocery List:\n" + groceryList.join(", "));
    alert("Sorted Grocery List:\n" + groceryListSort.join(", "));
    alert("Reversed Grocery List:\n" + groceryListReverse.join(", "));
} else {
    alert("Grocery list creation canceled.");
}
