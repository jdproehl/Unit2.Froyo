// I am adding a prompt, which will ask the user to input Froyo Flavors


const userObject = {}
let userInput = prompt("Please enter a list of comma-separated froyo flavors!")
userObject.data = userInput;
/*const userInputString = prompt(
    "Please enter a list of comma-separated froyo flavors!",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
*/
// Split the string of numbers into an array of strings. Pulls out each elements in an array.
const stringArray = userInput.split(",");

//Use an object to keep count of how many orders there are of each flavor.


//Displays the various type of Froyo that a user inputted.

 console.log(Object.keys(userInput));

//Displays the total number of each flavor in the user's input.
 console.log(Object.values(userInput));