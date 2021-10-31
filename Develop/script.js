// Assignment code here

// DOM elements
var generateBtn = document.querySelector("#generate");
const results = document.querySelector("textarea[id='password']");

console.log(results);

//Declarations
var confirmLength;
var confirmSpecial;
var confirmNumeric;
var confirmLower;
var confirmUpper;
var choices;

//Random Generator values
//Lowercase
const lower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

//Uppercase
const upper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

//Special characters
const special = `!@#$%^&*="&'*+,-./:;<=>?@^_|~`;
const randomSpecial = special[Math.floor(Math.random() * special.length)];

//numeric
const number = String.fromCharCode(Math.floor(Math.random() * 10) + 48);









// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);