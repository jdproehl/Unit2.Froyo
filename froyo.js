// I am adding a prompt, which will ask the user to input Froyo Flavors
let froyoFlavors = prompt("Please enter a comma-seperated list of froyo flavors!");

//The following code will split the user's comma-seperated input into an array of strings.
const input = froyoFlavors.split(', ');

// The following code will be used to iterate through the array of flavors
let totalFlavors = 0;
for (const individualFlavor in input) {
  totalFlavors += input[individualFlavor];
}
console.log(totalFlavors);

// The following code will count the number of of each flavor in the user's input string.
console.log(Object.values(input));