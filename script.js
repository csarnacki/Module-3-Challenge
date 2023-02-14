// Assignment code here

function generatePassword() {
  // Declaring variables for each character type
  let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*_-+=";
 
  let thisPassword = "";

  let pwlength = prompt("Choose password length: 8-128 characters.");

  // Some conditionals created for confirming what character type the user wants in their password
  let characters = alpha
  if (pwlength < 8 || pwlength > 128) {
    alert("Password must be between defined length.")
    generatePassword()
  }
  if (confirm("Do you want letter characters?")) {
    characters;
  } else {
     characters = "";
  }
  if (confirm("Do you wamt numeric characters?")) {
    characters += numbers;
  } else {
     numbers = "";
  }
  if (confirm("Do you want special characters?")) {
    characters += symbols += numbers;
  } else {
     symbols = "";
  }
  if (characters === 0) {
    alert("Minimum of one type of character must be chosen");
    generatePassword()
  }

  // For loop created to loop through the variable strings
  for (let i = 0; i < pwlength; i++) {
    thisPassword += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return thisPassword;
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

