// # of chars helper function
function numberOfChars() {
  var numChar = 0;

  while (numChar < 8 || numChar > 128) {
    numChar = prompt("Choose number of characters between 8-128"); // User chooses # of characters
  }
}

// Character type declarations
var lower;
var upper;
var numbers;
var special;

// Character type helper function
function charTypeSelect() {
  lower = confirm("Would you like lowercase letters in your password?"); // User decides lowercase letters
  upper = confirm("How about uppercase letters?");                       // User decides uppercase letters
  numbers = confirm("What about numbers?");                              // User decides numbers
  special = confirm("Any special characters?");                          // User decides special characters

  while (lower === false && upper === false && numbers === false && special === false) { // If no character type is selected
    alert("You must select at least one character type! \nPlease try again.");
    charTypeSelect();
  }
}

// Password Generator function
function generatePassword() {
  numberOfChars(); // User chooses # of chars
  charTypeSelect(); // User chooses character types
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

/*
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

No errors in console

comments

README w/description, screenshot, and link to deployed application
*/