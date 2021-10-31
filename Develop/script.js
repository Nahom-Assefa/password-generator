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

//----------------------------------------------------------------------------------------------

function generatePassword() {
    const entry = parseInt(
      prompt(
        `Please enter the number of characters you would like for your password?`
      )
    );
    if (!entry) {
      alert("You need to input a value");
      generatePassword();
    } else if (entry >= 8 && entry <= 128) {
      alert(
        `The length must be a number between 8 and 128 characters! Please try again.`
      );
      generatePassword();
    } else {
      confirmSpecial = confirm(`Would you like to include special characters?`);
      confirmNumeric = confirm(`Would you like to include numbers?`);
      confirmLower = confirm(`Would you like to include lower case characters?`);
      confirmUpper = confirm(`Would you like to include upper case characters?`);
    }
    
    //No positive options
    if (!confirmSpecial && !confirmNumeric && !confirmLower && !confirmUpper) {
      choices = alert("You must choose a criteria!");
    }
    //All positive options
    else if (confirmSpecial && confirmNumeric && confirmLower && confirmUpper) {
      choices = randomSpecial.concat(upper, lower, number);
    }
    // Else if for 3 positive options
    else if (confirmSpecial && confirmNumeric && confirmUpper) {
      choices = randomSpecial.concat(number, upper);
    } else if (confirmSpecial && confirmNumeric && confirmLower) {
      choices = randomSpecial.concat(number, lower);
    } else if (confirmSpecial && confirmLower && confirmUpper) {
      choices = randomSpecial.concat(lower, upper);
    } else if (confirmNumeric && confirmLower && confirmUpper) {
      choices = number.concat(lower, upper);
    }
    // Else if for 2 positive options
    else if (confirmSpecial && confirmNumeric) {
      choices = randomSpecial.concat(number);
    } else if (confirmSpecial && confirmLower) {
      choices = randomSpecial.concat(lower);
    } else if (confirmSpecial && confirmUpper) {
      choices = randomSpecial.concat(upper);
    } else if (confirmLower && confirmNumeric) {
      choices = lower.concat(number);
    } else if (confirmLower && confirmUpper) {
      choices = lower.concat(upper);
    } else if (confirmNumeric && confirmUpper) {
      choices = number.concat(upper);
    }
    // Else if for 1 positive option
    else if (confirmSpecial) {
      choices = randomSpecial;
    } else if (confirmNumeric) {
      choices = number;
    } else if (confirmLower) {
      choices = lower;
    } else if (confirmUpper) {
      choices = upper;
    }
}
   







// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);