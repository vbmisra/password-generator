document.getElementById("clear").addEventListener("click", function () {
  ["upCase", "lowCase", "numbers", "spec-char"].forEach(function(id) {
    document.getElementById(id).checked = false;
  });
  return false;
})

// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".",
"/", ":",";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~", "]"];
var char = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
"r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//var passGen = window.confirm("Choose password options, then click generate password")



// function to generate password based on user inputs
// concatenate variables above based on user choices
// for loop to populate password array based on length
function generatePassword() {

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

