// I am adding a prompt, which will ask the user to input Froyo Flavors
let userObject = {};
let froyoFlavors = prompt("Please enter a comma-seperated list of froyo flavors!");
userObject.data = froyoFlavors;

//The following code will split the user's comma-seperated input into an array of strings.
const input = froyoFlavors.split(', ');

let flavorCounts = {};

//The following code will be used to iterate through the array of strings
for (var i = 0; i < input.length; i++) {
  let flavor = input[i].trim();
  if (!flavorCounts[flavor]) {
    flavorCounts[flavor] = 1;
  } else {
    flavorCounts[flavor]++;
  }
}
console.log("Flavor counts:");
console.log(flavorCounts);

// The following code will count the number of of each flavor in the user's input string.
console.log(Object.values(input));
