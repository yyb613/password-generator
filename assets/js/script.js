// # of chars helper function
function numberOfChars() {
  var numChar = 0;

  while (numChar < 8 || numChar > 128) {
    numChar = prompt("Choose number of characters between 8-128"); // User chooses # of characters
  }

  return numChar;
}

// Character type object declaration
var charTypeObj = {};

// Character type helper function
function charTypeSelect() {
  charTypeObj = {
    lower : confirm("Would you like lowercase letters in your password?"), // User decides lowercase letters
    upper : confirm("How about uppercase letters?"),                       // User decides uppercase letters
    numbers : confirm("What about numbers?"),                              // User decides numbers
    special : confirm("Any special characters?"),                          // User decides special characters 
  };

  while ( // If no character type is selected
    charTypeObj["lower"] === false && 
    charTypeObj["upper"] === false && 
    charTypeObj["numbers"] === false && 
    charTypeObj["special"] === false
    ) { 
    alert("You must select at least one character type! \nPlease try again."); // Notify user
    charTypeSelect(); // Rerun function
  }

  return charTypeObj;
}

// Initialize password characters variables
var lowerChars = "abcdefghijklmnopqrstuvwxyz";
var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
var nums = "123456789";
var specials = " !\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";
var selectedTypes = '';

// Password Generator function
function generatePassword() {
  var numChar = numberOfChars(); // User chooses # of chars
  var charTypeObj = charTypeSelect(); // User chooses character types
  
  // Reset selectedTypes
  selectedTypes = '';

  // Append character types
  if (charTypeObj["lower"]) {
    selectedTypes += lowerChars; // appends lowercase letters
  }

  if (charTypeObj["upper"]) {
    selectedTypes += upperChars; // appends uppercase letters
  }

  if (charTypeObj["numbers"]) {
    selectedTypes += nums; // appends numbers
  }

  if (charTypeObj["special"]) {
    selectedTypes += specials; // appends special characters
  }

  var password = '';

  for (var i = 0; i < numChar; i++) { // iterates "numChar" times
    password += selectedTypes[Math.floor(Math.random() * selectedTypes.length)]; // appends random char to new password
  }

  return password; // returns generated password
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